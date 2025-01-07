import React from 'react';
import { CartItem as CartItemType } from '../types/book';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
                <img src={item.book.imageUrl} alt={item.book.title} className="w-20 h-28 object-cover" />
                <div>
                    <h3 className="font-semibold">{item.book.title}</h3>
                    <p className="text-gray-600">{item.book.author}</p>
                    <p className="text-green-600">${item.book.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => onUpdateQuantity(item.book.id, Math.max(0, item.quantity - 1))}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => onUpdateQuantity(item.book.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => onRemove(item.book.id)}
                    className="text-red-500 hover:text-red-700"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};
