import React, { useState } from 'react';
import CartItem from './CartItem';

interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Cart: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Item A', price: 50, quantity: 2 },
        { id: 2, name: 'Item B', price: 30, quantity: 1 },
        { id: 3, name: 'Item C', price: 20, quantity: 3 },
    ]);

    const removeItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {items.length > 0 ? (
                items.map((item) => (
                    <CartItem
                        key={item.id}
                        {...item}
                        onRemove={removeItem}
                    />
                ))
            ) : (
                <p>Your Cart is Empty</p>
            )}
            <h2>Total: ${total}</h2>
        </div>
    );
};

export default Cart;

