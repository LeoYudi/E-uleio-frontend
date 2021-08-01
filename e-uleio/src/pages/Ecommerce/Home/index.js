import React from 'react';

import './style.css';

import { useCart } from '../../../contexts/Cart';
import { Link } from 'react-router-dom';

function Home() {
    const productTeste = {
        id: 1,
        image: '/public/assets/book.jpg',
        name: 'A maldição do tigre',
        image: '/assets/book.jpg',
        author: 'nao sei',
        price: 65.5,
        description: 'descrição',
        category: 'romance',
        pubisher: 'euleio',
    }
    const productTeste2 = {
        id: 2,
        image: '/public/assets/book.jpg',
        name: 'livro 2',
        image: '/assets/book.jpg',
        author: 'nao sei',
        price: 80.3,
        description: 'descrição',
        category: 'romance',
        publisher: 'e-uleio'
    }
    const { addItem } = useCart();
    return (
        <div>
            <button onClick={() => addItem(productTeste)} >add item</button>
            <button onClick={() => addItem(productTeste2)} >add item</button>
            <Link to='/cart'>carrinho</Link>
        </div >
    );
}

export default Home;