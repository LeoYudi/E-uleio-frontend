import React from 'react';
import './style.css';

function Cart() {
    return (
        <div className='cart-container'>
            <h2>Carrinho</h2>
            <div className='cart-content'>
                <div className='cart-itens'>
                    <CartItem />
                    <CartItem />
                </div>
                <div className='payment-info'>
                    <span>Total: R${ }</span>
                    <span>Itens: { }</span>
                </div>
                <div className='payment-buton'>
                    <button>Comprar</button>
                    <span>Limpar</span>
                </div>
            </div>
        </div>
    );
}

export default Cart;