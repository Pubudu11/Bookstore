package com.example.bookstore.Repository;
import com.example.bookstore.Model.Customer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, String>{
    List<Customer> findByUserId(String userId);
}
