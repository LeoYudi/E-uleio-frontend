import React from 'react';
import { useHistory } from 'react-router-dom';

import { logout } from '../../services/auth';


import './style.css';

function Profile() {

    let history = useHistory();

    function sair() {
        logout();
        history.push('/');
    }

    return (
        <button onClick={() => sair()}>sair</button>
    );
}

export default Profile;