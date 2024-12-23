package com.example.bookstore.Controller;

import com.example.bookstore.Model.Book;
import com.example.bookstore.Service.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/books/"})
public class BookController {
    @Autowired
    private BookService bookService;
    public BookController() {

    }
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book newBook = bookService.addBook(book);
        return ResponseEntity.ok(newBook);
    }
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getBooks();
        return ResponseEntity.ok(books);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") String id) {
        if (bookService.getBookById(id) != null) {
            return ResponseEntity.ok(bookService.getBookById(id));
        }
        else {
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping("/title/{title}")
    public ResponseEntity<List<Book>> getBookByTitle(@PathVariable("title") String title) {
        return ResponseEntity.ok(bookService.getBookByTitle(title));
    }
    @GetMapping("/author/{author}")
    public ResponseEntity<List<Book>> getBookByAuthor(@PathVariable("author") String author) {
        return ResponseEntity.ok(bookService.getBooksByAuthor(author));
    }
    @GetMapping("/title/{title}/author/{author}")
    public ResponseEntity<List<Book>> getBooksByAuthorAndTitle(String author, String title) {
        return ResponseEntity.ok(bookService.getBooksByAuthorAndTitle(author, title));
    }
    @GetMapping("/genre/{genre}")
    public ResponseEntity<List<Book>> getBooksByGenre(@PathVariable("genre") String genre) {
        return ResponseEntity.ok(bookService.getBooksByGenre(genre));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") String id, @RequestBody Book book) {
        Book updatedBook = bookService.updateBook(book, id);
        return updatedBook != null ? ResponseEntity.ok(updatedBook) : ResponseEntity.notFound().build();

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable("id") String id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }

}
