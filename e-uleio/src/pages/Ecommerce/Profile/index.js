import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { message } from 'antd';

import { logout } from '../../../services/auth';
import api from '../../../services/api';
import { useUser } from '../../../contexts/User';

import './style.css';
import { FiEdit, FiLogOut, FiTrash, FiXSquare } from 'react-icons/fi';

function Profile() {
    const { user, removeUser, setUser } = useUser();

    const [isEnabled, setIsEnabled] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zip_code, setZip_Code] = useState('');
    const [cpf, setCpf] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setCpf(user.cpf);
        setZip_Code(user.zip_code);
    }, [user]);

    let history = useHistory();

    function sair() {
        message.loading({
            key: "loggingOut",
            content: "Saindo...",
            duration: 9999
        });

        logout();
        removeUser();
        history.push('/');
        message.destroy("loggingOut");
        window.location.reload();
    }

    async function handleUpdate(e) {
        e.preventDefault();

        try {
            const response = await api.put('users', {
                name,
                email,
                cpf,
                zip_code,
                oldPassword,
                password
            });


            if (response.status === 200) {
                message.success("Dados atualizados com sucesso!");
                window.location.reload();
                setUser(response.data);
                document.getElementById('password').value = "";
                document.getElementById('oldPassword').value = "";
                setIsEnabled(!isEnabled);
            }

        } catch (error) {
            message.error("Erro ao atualizar os dados, tente novamente...");
            console.log(error);
        }
    }

    async function deleteUser() {

        if (window.confirm("Tem certeza que deseja deletar sua conta ?")) {

            message.loading({
                key: "deleting",
                content: "Deletando...",
                duration: 9999
            });

            try {
                const response = await api.delete('users');

                if (response.status === 200) {
                    message.destroy("deleting");
                    logout();
                    removeUser();
                    history.push('/');
                    window.location.reload();
                }
            } catch (error) {
                message.destroy("deleting");
                message.error("Erro ao deletar, tente novamente...");
                console.log(error);
            }
        }
    }

    function resetForm() {
        document.getElementById('name').value = user.name;
        document.getElementById('cep').value = user.zip_code;
        document.getElementById('password').value = '';
        document.getElementById('oldPassword').value = '';
        setIsEnabled(!isEnabled);
    }

    return (
        <div className='profile-container'>
            <div className='profile-content'>
                <h2>Bem-vindo {user.name}</h2>
                <div className="buttons-top">
                    <Button
                        content={
                            <div className="button-icon">
                                <FiLogOut></FiLogOut>
                                <p>Sair</p>
                            </div>
                        }
                        onClick={() => sair()} />
                    <Button
                        content={isEnabled ?
                            (
                                <div className="button-icon">
                                    <FiXSquare></FiXSquare>
                                    <p>Cancelar</p>
                                </div>
                            ) : (
                                <div className="button-icon">
                                    <FiEdit></FiEdit>
                                    <p>Editar</p>
                                </div>
                            )}
                        onClick={() => resetForm()}
                    />
                    <Button content={
                        <div className="button-icon">
                            <FiTrash></FiTrash>
                            <p>Deletar conta</p>
                        </div>
                    }
                        onClick={deleteUser} disabled={user.is_admin} />
                </div>
                <form className='update-form' onSubmit={handleUpdate}>
                    <Input
                        label={'Nome'}
                        defaultValue={name}
                        id={'name'}
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEnabled}
                        required
                    />
                    <div className="small-input">
                        <Input
                            label={'CEP'}
                            defaultValue={zip_code}
                            id={'cep'}
                            type='text'
                            onChange={(e) => setZip_Code(e.target.value)}
                            disabled={!isEnabled}
                            required
                        />
                        <Input
                            label={'CPF'}
                            defaultValue={cpf}
                            id={'cpf'}
                            type='text'
                            disabled
                            required
                        />
                    </div>
                    <Input
                        label={'Email'}
                        defaultValue={email}
                        id={'email'}
                        type='email'
                        disabled
                        required
                    />
                    <Input
                        label={'Senha atual'}
                        id={'oldPassword'}
                        type='password'
                        onChange={(e) => setOldPassword(e.target.value)}
                        disabled={!isEnabled}
                        required
                    />
                    <Input
                        label={'Nova senha'}
                        id={'password'}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={!isEnabled}
                        required
                    />
                    <Button content={'confirmar'} type='submit' disabled={!isEnabled} />
                </form>
            </div>
        </div>
    );
}

export default Profile;