import axios from "axios";
import { Book } from "../types/Book";
import { User } from "../types/User";

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
