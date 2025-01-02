package com.example.bookstore.Repository;

import com.example.bookstore.Model.Admin;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
public interface AdminRepository extends MongoRepository<Admin, String> {

}
