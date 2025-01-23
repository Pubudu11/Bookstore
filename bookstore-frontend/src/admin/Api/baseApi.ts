import axios from "axios";
import {Book} from "../types/Book";

const api = axios.create({
    baseURL: "http://localhost:8080/api", // Replace with your backend URL
});

export const getBooks = () => api.get("/books/");
export const getBooktById = (id: string) => api.get(`/books/${id}`);
export const addBooks = (data: Book) => api.post("/books/", data);
export const updateBook = (id: string, data: Book) =>
    api.put(`/books/${id}`, data);
export const deleteBookById = (id: string) => api.delete(`/books/${id}`);

export const getUsers = () => api.get("/users");
export const getUsersById = (id: string) => api.get(`/users/${id}`);
export const addUsers = (data: Book) => api.post("/users/", data);
export const updateUser = (id: string, data: Book) =>
    api.put(`/users/${id}`, data);
export const deleteUserById = (id: string) => api.delete(`/users/${id}`);
export default api;
