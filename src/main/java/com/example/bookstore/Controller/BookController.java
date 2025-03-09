package com.example.bookstore.Controller;

import com.example.bookstore.Model.Book;
import com.example.bookstore.Service.BookService;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"/api/books/"})
public class BookController {

    @Autowired
    private BookService bookService;

    public BookController() {
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestPart("book") Book book, @RequestPart("file") MultipartFile file) {
        int id = bookService.getBooks().size() + 1;
        book.setId(String.valueOf(id));
        String fileName = saveFile(file);
        book.setImgData(fileName);
        Book newBook = bookService.addBook(book);
        return ResponseEntity.ok(newBook);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") String id, @RequestPart("book") Book book, @RequestPart("file") MultipartFile file) {
        String fileName = saveFile(file);
        book.setImgData(fileName);
        Book updatedBook = bookService.updateBook(book, id);
        return updatedBook != null ? ResponseEntity.ok(updatedBook) : ResponseEntity.notFound().build();
    }

    private String saveFile(MultipartFile file) {
        if (file.isEmpty()) {
            throw new RuntimeException("File is empty");
        }
        try {
            // Use java.util.Base64 to encode the file bytes
            return Base64.getEncoder().encodeToString(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        int id = bookService.getBooks().size();
        System.out.println("Total books: " + id);
        List<Book> books = bookService.getBooks();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") String id) {
        Book book = bookService.getBookById(id);
        return book != null ? ResponseEntity.ok(book) : ResponseEntity.badRequest().build();
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<List<Book>> getBookByTitle(@PathVariable("title") String title) {
        return ResponseEntity.ok(bookService.getBookByTitle(title));
    }

    @GetMapping("/author/{author}")
    public ResponseEntity<List<Book>> getBooksByAuthor(@PathVariable("author") String author) {
        return ResponseEntity.ok(bookService.getBooksByAuthor(author));
    }

    @GetMapping("/title/{title}/author/{author}")
    public ResponseEntity<List<Book>> getBooksByAuthorAndTitle(@PathVariable("author") String author, @PathVariable("title") String title) {
        return ResponseEntity.ok(bookService.getBooksByAuthorAndTitle(author, title));
    }

    @GetMapping("/genre/{category}")
    public ResponseEntity<List<Book>> getBooksByCategory(@PathVariable("category") String category) {
        return ResponseEntity.ok(bookService.getBooksByCategory(category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable("id") String id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
