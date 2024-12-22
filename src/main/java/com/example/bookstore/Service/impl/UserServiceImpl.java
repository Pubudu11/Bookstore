package com.example.bookstore.Service.impl;


import com.example.bookstore.Model.User;
import com.example.bookstore.Repository.UserRepository;
import com.example.bookstore.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user){
        User newUser = userRepository.save(user);
        return newUser;

    }
    @Override
    public User getUserById(String id){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            return user.get();
        }
        else {
            System.out.println("User not found with id " + id);
            return null;
        }
    }
    @Override
    public User getUserByUsername(String username){
        return userRepository.findByUsername(username);
    }
    
    @Override
    public List<User> getAllUsers() {
        System.out.println("Finding all users");
        List<User> users = userRepository.findAll();
        System.out.println("Found " + users.size() + " users");
        for (User user : users) {
            System.out.println(user.getFirstName() + " " + user.getLastName());
        }  // Log the result
        return users;

    }
    @Override
    public void deleteUserById(String id) {
        userRepository.findById(id).orElseThrow(()-> new RuntimeException("User not found with id " + id));
        userRepository.deleteById(id);

    }
    @Override
    public User check_credentials(String username, String password) {
        List <User> userlist = userRepository.findAll();
        for(User person : userlist){
            if(person.getUsername().equals(username) && person.getPassword().equals(password)){
                return person;
            }

        }
        throw new RuntimeException();
    }
    @Override
    public User updateUser(User user, String id) {
        User existingUser = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());

        userRepository.save(existingUser);
        return existingUser;
    }
}
