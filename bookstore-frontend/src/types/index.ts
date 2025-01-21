export interface IUser {
    _id: string;
    email: string;
    name?: string;
    role: 'user' | 'admin';
    address?: string;
    createdAt: Date;
}

export interface IBook {
    _id: string;
    title: string;
    author: string;
    description?: string;
    price: number;
    stock: number;
    isbn: string;
    category: string[];
    imageUrl?: string;
    createdAt: Date;
}

export interface IOrderItem {
    book: IBook;
    quantity: number;
    price: number;
}

export interface IOrder {
    _id: string;
    user: IUser;
    items: IOrderItem[];
    totalAmount: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    shippingAddress: string;
    createdAt: Date;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterData extends LoginCredentials {
    name: string;
    address?: string;
}

export interface AuthResponse {
    user: IUser;
    token: string;
}
export interface RegisterRequest {
    username: string;
    email: string;
    password: string;

}