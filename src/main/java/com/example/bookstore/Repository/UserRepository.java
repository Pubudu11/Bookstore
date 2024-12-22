package com.example.bookstore.Repository;

import com.example.bookstore.Model.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

User findByUsername(String username);
}
