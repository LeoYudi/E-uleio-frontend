import React from 'react';
import CartItem from '../../components/CartItem';
import './style.css';

function Cart() {
    const productTeste = {
        name: 'A maldição do tigre',
        price: 60.5
    }
    return (
        <div className='cart-container'>
            <h2>Carrinho</h2>
            <div className='cart-content'>
                <div className='cart-items'>
                    <CartItem product={productTeste} />
                    <CartItem product={productTeste} />
                    <CartItem product={productTeste} />
                    <CartItem product={productTeste} />
                    <CartItem product={productTeste} />
                </div>
                <div className='payment'>
                    <div className='payment-info'>
                        <span>Total: R${ }</span>
                        <span>Itens: { }</span>
                    </div>
                    <div className='payment-button'>
                        <button>Comprar</button>
                        <span>Limpar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;