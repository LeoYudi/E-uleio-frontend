import React, { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import './style.css';
import { message } from 'antd';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zip_code, setZip_Code] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        message.loading({
            key: "register",
            content: "Cdastrando...",
            duration: 9999
        });

        try {
            const response = await api.post('users', {
                name,
                email,
                password,
                zip_code,
                cpf
            });

            if (response.status === 200) {
                message.destroy("register");
                message.success("Cadastro realizado com sucesso! :)");
                history.push('/login');
                window.location.reload();
            }

        } catch (error) {
            message.destroy("register");
            message.error("Algo deu errado ao cadastrar seus dados, tente novamente...");
            console.log(error);
        }
    }

    return (
        <div className='register-container'>
            <header>
                <a href="/"><FiArrowLeft color="white" size="2rem" /></a>
                <img src="/assets/books-icon.png" alt="Logo"></img>
            </header>
            <div className='register-content'>
                <h2>Cadastro</h2>
                <form className='register-form' onSubmit={handleRegister}>
                    <Input
                        label={'Nome'}
                        id={'name'}
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="small-input">
                        <Input
                            label={'CEP'}
                            id={'cep'}
                            type='text'
                            onChange={(e) => setZip_Code(e.target.value)}
                            required
                        />
                        <Input
                            label={'CPF'}
                            id={'cpf'}
                            type='text'
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                    </div>
                    <Input
                        label={'Email'}
                        id={'email'}
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label={'Senha'}
                        id={'password'}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button content={'confirmar'} type='submit' />
                </form>
                <a href="/login">Já tenho uma conta</a>
            </div>
        </div>
    );
}

export default Register;