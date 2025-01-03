package com.example.bookstore.Controller;


import com.example.bookstore.Model.User;
import com.example.bookstore.Service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/users"})
public class UserController {
    @Autowired
    private UserService userService;
    public UserController() {

    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = this.userService.createUser(user);
        return ResponseEntity.ok(newUser);
    }
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = this.userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        User user = this.userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();

    }
    @GetMapping("/users/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable String id) {
        this.userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("auth")
    public ResponseEntity auth(String username, String password){
        try {
            return new ResponseEntity<User>(userService.check_credentials(username, password), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<String>("Invalid Credentials", HttpStatus.UNAUTHORIZED);}
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('USER')")

    public ResponseEntity<User> updateBook(@PathVariable("id") String id, @RequestBody User user) {
        User updatedUser = userService.updateUser(user, id);
        return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
}
}
