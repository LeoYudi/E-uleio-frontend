import React from 'react';

import { CartContextProvider } from '../../contexts/Cart';
import { EcommerceRoutes } from '../../routes';

//import './styles.css';

function Ecommerce() {
    return (
        <CartContextProvider>
            <div className="ecommerce-container">
                <h1>NavBar</h1>
                <div className="ecommerce-content">
                    <EcommerceRoutes />
                </div>
            </div>
        </CartContextProvider>
    );
}

export default Ecommerce;