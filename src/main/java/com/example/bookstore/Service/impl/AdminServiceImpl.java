package com.example.bookstore.Service.impl;

import com.example.bookstore.Model.Admin;
import com.example.bookstore.Repository.AdminRepository;
import com.example.bookstore.Service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin addAdmin(Admin admin) {
        return adminRepository.save(admin);
    }
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }
    public Admin getAdminById(String id) {
        Optional<Admin> admin = adminRepository.findById(id);
        if (admin.isPresent()) {
            return admin.get();
        }
        System.out.println("Admin not found");
        return null;
    }
    public Admin updateAdmin(Admin admin, String id) {
        Admin oldAdmin = adminRepository.findById(id).orElseThrow(()-> new RuntimeException("Admin not found"));
        oldAdmin.setUsername(admin.getUsername());
        oldAdmin.setPassword(admin.getPassword());
        return adminRepository.save(oldAdmin);
    }
    @Override
    public void deleteAdmin(String id) {
        adminRepository.findById(id).orElseThrow(()-> new RuntimeException("Admin not found"));
        adminRepository.deleteById(id);
    }
}
