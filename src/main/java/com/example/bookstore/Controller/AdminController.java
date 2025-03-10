package com.example.bookstore.Controller;

import com.example.bookstore.Model.Admin;
import com.example.bookstore.Service.AdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"/api/admin"})
public class AdminController {
    @Autowired
    private AdminService adminService;
    @PostMapping
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminService.addAdmin(admin));
    }
    @GetMapping
    public ResponseEntity<List<Admin>> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable("id") String id) {
        if (adminService.getAdminById(id) != null) {
            return ResponseEntity.ok(adminService.getAdminById(id));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable("id") String id, @RequestBody Admin admin) {
        Admin updatedAdmin = adminService.updateAdmin(admin, id);
        return updatedAdmin != null ? ResponseEntity.ok(updatedAdmin) : ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable("id") String id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }
}
