package com.example.bookstore.Repository;
import com.example.bookstore.Model.Order;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, String> {

    List<Order> findByName(String name);
    List<Order> findByStatus(String status);
    List<Order> findByItem(String item);
}

