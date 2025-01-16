package com.example.bookstore.Service;

import com.example.bookstore.Model.Admin;

import java.util.List;

public interface AdminService {
    Admin addAdmin(Admin admin);
    List<Admin> getAllAdmins();
    Admin getAdminById(String id);
    Admin updateAdmin(Admin admin, String id);
    void deleteAdmin(String id);
}
