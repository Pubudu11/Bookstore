package com.example.bookstore.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.*;

@Document(collection = "admins")
@Data

public class Admin {
    @Id
    private String id;
    private String username;
    private String password;
}
