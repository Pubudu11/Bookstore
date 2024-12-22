package com.example.bookstore.Service;

import com.example.bookstore.Model.User;

import java.util.List;

public interface UserService {

    User createUser(User user);
    User getUserById(String id);
    User updateUser(User user , String id);
    User getUserByUsername(String username);
    User  check_credentials(String username, String password);
    List<User> getAllUsers();
    void deleteUserById(String id);
}
//test comme