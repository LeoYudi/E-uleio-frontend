import React from 'react'
import './style.css'

//Icons
import { FiBook } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";


function Navbar(){
    return(
        <div className="navbar-container">
            <div className="menu-item">
                <FiBook /> Livros
            </div>
            <div className="menu-item">
                <FiLogIn/> Entrar
            </div>
            <div className="menu-item">
                <FiShoppingCart/> Carrinho
            </div>
            <div className="menu-item">
                <input type="text" />
                <FiSearch/>
            </div>
        </div>
    )
}


export default Navbar;