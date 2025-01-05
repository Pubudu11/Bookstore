package com.example.bookstore.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.HashSet;
import java.util.Set;

import jakarta.validation.constraints.NotBlank;


@Document(collection = "admins")
public class Admin {
    @Id
    private String id;

    @NotBlank
    @Size(min = 5, max = 50)
    private String username;
    @NotBlank
    @Size(min = 5, max = 50)

    private String password;

    @Indexed(unique = true)
    @Size(min = 10, max = 100)
    @Email
    private String email;

    @DBRef
    private Set<Role> roles = new HashSet<>();

    public Admin(String username, String password ,String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public @Size(min = 10, max = 100) @Email String getEmail() {
        return email;
    }

    public void setEmail(@Size(min = 10, max = 100) @Email String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
