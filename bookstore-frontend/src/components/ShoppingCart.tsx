import React, { useState } from "react";
import Header from "./Header"; // Correctly import Header
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import "./ShoppingCart.css";

interface CartItem {
    id: number;
    name: string;
    author: string;
    price: number;
    quantity: number;
    image: string;
}

const initialCartItems: CartItem[] = [
    { id: 1, name: "Mai Maara Prasangaya", author: "Mohan Raj Madawala", price: 900, quantity: 2, image: "/book1.jpeg" },
    { id: 2, name: "Hath Pana", author: "Kumarathunga Munidasa", price: 900, quantity: 3, image: "/oneplus.png" },
    { id: 3, name: "Seeni Murukku", author: "Kasun Heenatigala", price: 800, quantity: 1, image: "/pixel.png" },
];

const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
    const [sortOption, setSortOption] = useState<string>("price-asc");

    const navigate = useNavigate();

    const sortCartItems = (option: string) => {
        let sortedItems = [...cartItems];
        switch (option) {
            case "price-asc":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            case "name-asc":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "quantity-asc":
                sortedItems.sort((a, b) => a.quantity - b.quantity);
                break;
            case "quantity-desc":
                sortedItems.sort((a, b) => b.quantity - a.quantity);
                break;
            default:
                break;
        }
        setCartItems(sortedItems);
        setSortOption(option);
    };

    const calculateSubtotal = (): number => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        navigate("/payment");
    };

    const subtotal = calculateSubtotal();
    const shippingCost = 20;

    return (
        <div className="shopping-cart-container">
            <Header currentSort={sortOption} onSortChange={sortCartItems} />
            <div className="shopping-cart-content">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Author: {item.author}</p>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="order-summary">
                    <OrderSummary subtotal={subtotal} shippingCost={shippingCost} />
                    <button onClick={handleCheckout} className="checkout-button">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
