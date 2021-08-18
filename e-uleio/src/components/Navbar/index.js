import React from 'react'
import { NavLink } from 'react-router-dom';

import { useUser } from '../../contexts/User';

//Icons
import { FiBook } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import './style.css'

function Navbar() {
    const { user } = useUser();

    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <NavLink to='/' className="menu-item">
                    <FiBook /> Livros
                </NavLink>
                {user ? (
                    <NavLink to="/profile" className="menu-item">
                        <FiUser /> {"Perfil"}
                    </NavLink>
                ) : (
                    <a href="/login" className="menu-item">
                        <FiLogIn /> Entrar
                    </a>
                )}
                <NavLink to='/cart' className="menu-item">
                    <FiShoppingCart /> Carrinho
                </NavLink>
                <div className="menu-item">
                    <input type="text" />
                    <FiSearch />
                </div>
            </div>
        </div>
    );
}


export default Navbar;