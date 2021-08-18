import React, { useState } from 'react';
import { useHistory, withRouter, NavLink } from 'react-router-dom';

import { message } from 'antd';

import { FiArrowLeft } from 'react-icons/fi';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import api from '../../../services/api';
import { login } from '../../../services/auth';
import { useUser } from '../../../contexts/User';

import './style.css';


function Login() {
    const { setUser } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        message.loading({
            key: "logging",
            content: "Entrando...",
            duration: 9999
        });

        try {
            const response = await api.post('login', {
                email,
                password
            });

            if (response.status === 200) {
                message.destroy("logging");
                login(response.data.token);
                setUser(response.data.user);
                history.push('/profile');
            }

        } catch (error) {
            console.log(error);
            message.destroy("logging");
            message.error("Erro ao efetuar login, tente novamete...");
        }

    }

    return (
        <div className='login-container'>
            <header>
                <a href="/"><FiArrowLeft color="white" size="2.5rem" /></a>
                <img src="/assets/books-icon.png" alt="Logo"></img>
            </header>
            <div className='login-content'>
                <h2>Entrar</h2>
                <form className='login-form' onSubmit={handleLogin}>
                    <Input
                        label={'Email'}
                        id={'email'}
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label={'Password'}
                        id={'password'}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button content={'Entrar'} type='submit' />
                </form>
                <NavLink to='/register'>Ainda não tem uma conta? Cadastre-se</NavLink>
            </div>
        </div>
    );
}

export default withRouter(Login);