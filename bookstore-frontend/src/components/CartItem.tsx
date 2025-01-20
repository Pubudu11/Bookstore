import React from 'react';

interface CartItemProps {
    id: number;
    name: string;
    author: string;
    quantity: number;
    price: number;
    image: string;

    onRemove: (id: number) => void; // Callback to remove the item
}

const CartItem: React.FC<CartItemProps> = ({ id, name, author, quantity, price, image, onRemove }) => (
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        {/* Item Image and Details */}
        <div className="d-flex">
            <img
                src={image}
                alt={name}
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div className="ms-3">
                <h6 className="mb-0">{name}</h6>
                <small className="text-muted">{author}</small>
            </div>
        </div>
        {/* Quantity, Price, and Remove Button */}
        <div className="d-flex align-items-center">
            <span className="me-3">{quantity}</span>
            <strong className="me-3">${(price * quantity).toFixed(2)}</strong>
            <button
                onClick={() => onRemove(id)}
                className="btn btn-sm btn-danger"
            >
                Remove
            </button>
        </div>
    </div>
);

export default CartItem;
