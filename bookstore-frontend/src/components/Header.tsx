import React from "react";

interface HeaderProps {
    currentSort: string;
    onSortChange: (option: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSort, onSortChange }) => {
    return (
        <div className="header">
            <h1>Shopping Cart</h1>
            <div className="sort-options">
                <label htmlFor="sort">Sort by:</label>
                <select
                    id="sort"
                    value={currentSort}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="quantity-asc">Quantity (Low to High)</option>
                    <option value="quantity-desc">Quantity (High to Low)</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
