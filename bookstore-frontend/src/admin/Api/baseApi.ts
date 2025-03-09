import axios from "axios";
import { Book } from "../types/Book";
import { User } from "../types/User";
import { Admin } from "../types/Admin.ts";
import { Order } from "../types/Order.ts";

const api = axios.create({
    baseURL: "http://localhost:8080/api", // Replace with your backend URL
});

export const getBooks = async () => {
    const response = await api.get<Book[]>("/books/");
    return response.data;
};

export const getBookById = async (id: string) => {
    const response = await api.get<Book>(`/books/${id}`);
    return response.data;
};

export const addBooks = async (data: Book) => {
    const response = await api.post<Book>("/books/", data);
    return response.data;
};

export const updateBook = async (id: string, data: Book) => {
    const response = await api.put<Book>(`/books/${id}`, data);
    return response.data;
};

export const deleteBookById = async (id: string) => {
    const response = await api.delete<void>(`/books/${id}`);
    return response.data;
};

export const deleteAllBooks = async () => {
    const response = await api.delete<void>("/books/");
    return response.data;
};

export const getUsers = async () => {
    const response = await api.get<User[]>("/users");
    return response.data;
};

export const getUserById = async (id: string) => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
};

export const addUsers = async (data: User) => {
    const response = await api.post<User>("/users", data);
    return response.data;
};

export const updateUser = async (id: string, data: User) => {
    const response = await api.put<User>(`/users/${id}`, data);
    return response.data;
};

export const deleteUserById = async (id: string) => {
    const response = await api.delete<void>(`/users/${id}`);
    return response.data;
};

export const deleteAllUsers = async () => {
    const response = await api.delete<void>("/users/");
    return response.data;
};

export const getAdmins = async () => {
    const response = await api.get<Admin[]>("/admin");
    return response.data;
};

export const getAdminById = async (id: string) => {
    const response = await api.get<Admin>(`/admin/${id}`);
    return response.data;
};

export const addAdmins = async (data: User) => {
    const response = await api.post<Admin>("/admin", data);
    return response.data;
};

export const updateAdmin = async (id: string, data: User) => {
    const response = await api.put<Admin>(`/admin/${id}`, data);
    return response.data;
};

export const deleteAdminById = async (id: string) => {
    const response = await api.delete<void>(`/admin/${id}`);
    return response.data;
};

export const deleteAllAdmins = async () => {
    const response = await api.delete<void>("/admin/");
    return response.data;
};
export const getOrders = async () => {
    const response = await api.get<Order[]>("/orders");
    return response.data;
};

export const getOrderById = async (id: string) => {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
};

export const addOrder = async (data: Order) => {
    const response = await api.post<Order>("/orders", data);
    return response.data;
};

export const updateOrder = async (id: string, data: Order) => {
    const response = await api.put<Order>(`/orders/${id}`, data);
    return response.data;
};

export const deleteOrderById = async (id: string) => {
    const response = await api.delete<void>(`/orders/${id}`);
    return response.data;
};

export const deleteAllOrders = async () => {
    const response = await api.delete<void>("/orders");
    return response.data;
};
export const getShippingDetails = async () => {
    const response = await api.get<ShippingDetails[]>("/shipping-details");
    return response.data;
};

export const getShippingDetailsById = async (id: string) => {
    const response = await api.get<ShippingDetails>(`/shipping-details/${id}`);
    return response.data;
};

export const addShippingDetails = async (data: ShippingDetails) => {
    const response = await api.post<ShippingDetails>("/shipping-details", data);
    return response.data;
};

export const updateShippingDetails = async (id: string, data: ShippingDetails) => {
    const response = await api.put<ShippingDetails>(`/shipping-details/${id}`, data);
    return response.data;
};

export const deleteShippingDetailsById = async (id: string) => {
    const response = await api.delete<void>(`/shipping-details/${id}`);
    return response.data;
};

export const deleteAllShippingDetails = async () => {
    const response = await api.delete<void>("/shipping-details");
    return response.data;
};
export default api;














// import axios from "axios";
// import {Book} from "../types/Book";
//
// const api = axios.create({
//     baseURL: "http://localhost:8080/api", // Replace with your backend URL
// });
//
// export const getBooks = () => api.get("/books/");
// export const getBooktById = (id: string) => api.get(`/books/${id}`);
// export const addBooks = (data: Book) => api.post("/books/", data);
// export const updateBook = (id: string, data: Book) =>
//     api.put(`/books/${id}`, data);
// export const deleteBookById = (id: string) => api.delete(`/books/${id}`);
// export const deleteAllBooks = () => api.delete(`/books/`);
//
// export const getUsers = () => api.get("/users");
// export const getUsersById = (id: string) => api.get(`/users/${id}`);
// export const addUsers = (data: Book) => api.post("/users", data);
// export const updateUser = (id: string, data: Book) =>
//     api.put(`/users/${id}`, data);
// export const deleteUserById = (id: string) => api.delete(`/users/${id}`);
// export const deleteAllUsers = () => api.delete(`/users/`);
// export default api;
