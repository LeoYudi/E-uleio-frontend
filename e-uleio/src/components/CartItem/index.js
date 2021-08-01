import React from 'react';

import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
import { useCart } from '../../contexts/Cart';

import './style.css';

function CartItem({ product, index }) {

    const { increaseAmount, decreaseAmount, removeItem } = useCart();

    return (
        <div className='item-container'>
            <img src={product.image} alt='book'></img>
            <div className='item-infos'>
                <p>{product.name}</p>
                <span>R$: {(product.price * product.amount).toFixed(2)}</span>
            </div>
            <div className='item-amount'>
                <div className='buttons'>
                    <button onClick={() => increaseAmount(index)}>
                        <FiPlus color='white' />
                    </button>
                    <span>{product.amount}</span>
                    <button disabled={product.amount <= 1} onClick={() => decreaseAmount(index)}>
                        <FiMinus color='white' />
                    </button>
                </div>
                <div className='trash'>
                    <FiTrash size='1.9rem' onClick={() => removeItem(product.id)} />
                </div>
            </div>
        </div >
    );
}

export default CartItem;