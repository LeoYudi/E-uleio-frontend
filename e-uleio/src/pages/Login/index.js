import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.css';

function Login() {
    return (
        <div className='login-container'>
            <Header />
            <div className='login-content'>
                <h2>Entrar</h2>
                <form className='login-form'>
                    <Input placeholder={'Email'} id={'email'} />
                    <Input placeholder={'Senha'} id={'password'} />
                    <Button title={'Entrar'} width='25rem' />
                </form>
                <a href='/'>Ainda nao tem uma conta ? Registre-se.</a>
            </div>
        </div>
    );
}

export default Login;