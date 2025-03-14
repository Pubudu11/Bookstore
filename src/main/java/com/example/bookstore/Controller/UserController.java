package com.example.bookstore.Controller;


import com.example.bookstore.Model.User;
import com.example.bookstore.Payload.Response.MessageResponse;
import com.example.bookstore.Repository.UserRepository;
import com.example.bookstore.Service.UserService;

import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/users"})
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    public UserController() {

    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody @Valid User user, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }
        User newUser = userService.createUser(user);
        return ResponseEntity.ok("MSG : User created successfully" + newUser.getEmail());
    }

    @GetMapping
//    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = this.userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
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
@PutMapping("/{id}")
public ResponseEntity<?> updateUser(@PathVariable("id") String id, @RequestBody @Valid User user, BindingResult result) {
    if (result.hasErrors()) {
        return ResponseEntity.badRequest().body(result.getAllErrors());
    }
    User updatedUser = userService.updateUser(user, id);
    return updatedUser != null ? ResponseEntity.ok("MSG : User updated successfully" + updatedUser.getEmail()) : ResponseEntity.notFound().build();
}
}
