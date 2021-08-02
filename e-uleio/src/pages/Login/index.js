import React, { useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';
import { login } from '../../services/auth';

import './style.css';

import { useHistory, withRouter } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    async function handleLogin(e) {

        e.preventDefault();

        const response = await api.post('login', {
            email,
            password
        });

        try {

            if (response.status === 200) {
                login(response.data.token);
                history.push('/profile');
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='login-container'>
            <Header />
            <div className='login-content'>
                <h2>Entrar</h2>
                <form className='login-form' onSubmit={handleLogin}>
                    <Input
                        placeholder={'Email'}
                        id={'email'}
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        placeholder={'Senha'}
                        id={'password'}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button title={'Entrar'} type='submit' />
                </form>
                <a href='/'>Ainda nao tem uma conta ? Registre-se.</a>
            </div>
        </div>
    );
}

export default withRouter(Login);