import React from 'react';

import { CartContextProvider } from '../../contexts/Cart';
import { EcommerceRoutes } from '../../routes';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

import './style.css';

function Ecommerce() {
    return (
        <CartContextProvider>
            <div className="ecommerce-container">
                <Header />
                <Navbar />
                <div className="ecommerce-content">
                    <EcommerceRoutes />
                </div>
            </div>
        </CartContextProvider >
    );
}

export default Ecommerce;