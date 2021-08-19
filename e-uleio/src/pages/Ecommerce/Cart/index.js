import React from 'react';
import CartItem from '../../../components/CartItem'
import './style.css';

import { useCart } from '../../../contexts/Cart';

function Cart() {

    const { cartItems, totalCost, totalAmount, clearCart } = useCart();

    return (
        <div className='cart-container'>
            <h2>Carrinho</h2>
            <div className='cart-content'>
                <div className='cart-items'>
                    {cartItems.map((item, index) => (
                        <CartItem key={item.id} product={item} index={index} />
                    ))}
                </div>
                <div className='payment'>
                    <div className='payment-info'>
                        <span>Total: R$ {(totalCost).toFixed(2)}</span>
                        <span>Itens: {totalAmount}</span>
                    </div>
                    <div className='payment-button'>
                        <button>Comprar</button>
                        <span onClick={() => clearCart()}>Limpar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;