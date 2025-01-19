package com.example.bookstore.Service.impl;

import com.example.bookstore.Model.Book;
import com.example.bookstore.Repository.BookRepository;
import com.example.bookstore.Service.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private  BookRepository bookRepository;

    @Override
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
    @Override
    public Book getBookById(String id){
        Optional<Book> book = bookRepository.findById(id);
        if(book.isPresent()){
            return book.get();
        }
        System.out.println("Book not found" + id);
        return null;

    }
    @Override
    public List<Book> getBookByTitle(String title) {
        return bookRepository.findByTitle(title);
    }
    @Override
    public List<Book> getBooksByAuthor(String author){
        return bookRepository.findByAuthor(author);
    }
    @Override
    public List<Book> getBooksByAuthorAndTitle(String author, String title) {
        return bookRepository.findByAuthorAndTitle(author, title);
    }
    @Override
    public List<Book> getBooksByCategory(String category) {
        return bookRepository.findByCategory(category);
    }
    public Book updateBook(Book book, String id) {
        Book existingBook = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        existingBook.setId(book.getId());
        existingBook.setTitle(book.getTitle());
        existingBook.setAuthor(book.getAuthor());
        existingBook.setImgPath(book.getImgPath());
        existingBook.setLanguage(book.getLanguage());
        existingBook.setPublisher(book.getPublisher());
        existingBook.setCategory(book.getCategory());
        existingBook.setQuantity(book.getQuantity());
        existingBook.setPrice(book.getPrice());
        existingBook.setDescription(book.getDescription());

        bookRepository.save(existingBook);
        return existingBook;
    }
    @Override
    public void deleteBook(String id) {
        bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        bookRepository.deleteById(id);
    }
}
