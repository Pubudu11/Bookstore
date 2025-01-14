package com.example.bookstore.Service;

import com.example.bookstore.Model.Book;

import java.util.List;

public interface BookService {
    Book addBook(Book book);
    List<Book> getBooks();
    Book getBookById(String id);
    List<Book> getBookByTitle(String title);
    List<Book> getBooksByAuthor(String author);
    List<Book> getBooksByAuthorAndTitle(String author, String title);
    List<Book> getBooksByCategory(String genre);
    Book updateBook(Book book, String id);
    void deleteBook(String id);
}
