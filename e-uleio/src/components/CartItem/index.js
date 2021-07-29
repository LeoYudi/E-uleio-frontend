import React from 'react';

import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';

import './style.css';

function CartItem({ product }) {
    return (
        <div className='item-container'>
            <img src='/assets/book.jpg' alt='book'></img>
            <div className='item-infos'>
                <p>{product.name}</p>
                <span>R$: {(product.price).toFixed(2)}</span>
            </div>
            <div className='item-amount'>
                <div className='buttons'>
                    <button >
                        <FiPlus color='white' />
                    </button>
                    <span>3</span>
                    <button >
                        <FiMinus color='white' />
                    </button>
                </div>
                <div className='trash'>
                    <FiTrash size='1.9rem' />
                </div>
            </div>
        </div>
    );
}

export default CartItem;