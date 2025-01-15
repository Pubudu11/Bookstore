package com.example.bookstore.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.bookstore.Model.ERole;
import com.example.bookstore.Model.Role;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
