import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full bg-purple-600 text-white py-2 rounded font-bold hover:bg-purple-700 ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
