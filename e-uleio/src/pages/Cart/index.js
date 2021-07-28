import React from 'react';
import './style.css';

function Cart() {
    return (
        <div className='cart-container'>
            <h2>Carrinho</h2>
            <div className='cart-info'>
                <div className='cart-itens'>

                </div>
                <div className='payment'>
                    <span>Total: R${ }</span>
                    <span>Itens: { }</span>
                </div>
            </div>
        </div>
    );
}

export default Cart;