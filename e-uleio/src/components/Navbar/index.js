import React from 'react'
import './style.css'

//Icons
import { FiBook } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { isAuthenticated } from '../../services/auth';
import { NavLink } from 'react-router-dom';


function Navbar() {
    if (isAuthenticated())
        return (
            <div className="navbar-container">
                <div className="navbar-content">
                    <NavLink to='/' className="menu-item">
                        <FiBook /> Livros
                    </NavLink>
                    <NavLink to='/profile' className="menu-item">
                        <FiUser to='/profile' /> Perfil
                    </NavLink>
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
    else
        return (
            <div className="navbar-container">
                <div className="navbar-content">
                    <NavLink to='/' className="menu-item">
                        <FiBook /> Livros
                    </NavLink>
                    <NavLink to='/login' className="menu-item">
                        <FiLogIn /> Entrar
                    </NavLink>
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