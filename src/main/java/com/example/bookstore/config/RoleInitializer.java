package com.example.bookstore.config;

import com.example.bookstore.Model.ERole;
import com.example.bookstore.Model.Role;
import com.example.bookstore.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class RoleInitializer implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        // Check and insert roles if they don't exist
        for (ERole role : ERole.values()) {
            Optional<Role> existingRole = roleRepository.findByName(role);
            if (existingRole.isEmpty()) {
                Role newRole = new Role(role);
                roleRepository.save(newRole);
                System.out.println("Role " + role + " created.");
            }
        }
    }
}
