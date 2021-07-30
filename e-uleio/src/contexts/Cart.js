import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        setTotalAmount(0);
        setTotalCost(0);
        cartItems.forEach(item => {
            setTotalAmount(oldValue => oldValue + item.amount);
            setTotalCost(oldValue => oldValue + (item.amount * item.price));
        });
    }, [cartItems]);

    function addItem(product) {
        setCartItems([...cartItems, {
            id: product.id,
            name: product.name,
            author: product.author,
            price: product.price,
            description: product.description,
            category: product.category,
            pubisher: product.publisher
        }
        ])
    }

    function removeItem(id) {
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    function increaseAmount(index) {
        const updateItem = [...cartItems];
        updateItem[index].amount++;
        setCartItems(updateItem);
    }

    function decreaseAmount(index) {
        const updateItem = [...cartItems];
        updateItem[index].amount--;
        setCartItems(updateItem);
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            addItem,
            removeItem,
            increaseAmount,
            decreaseAmount,
            totalAmount,
            totalCost,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}
