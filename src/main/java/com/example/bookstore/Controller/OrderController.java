package com.example.bookstore.Controller;

import com.example.bookstore.Model.Order;
import com.example.bookstore.Service.OrderService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/orders"})

public class OrderController {
    @Autowired
    private OrderService orderService;
    public OrderController() {

    }
    @PostMapping
    public ResponseEntity<Order> addBook(@RequestBody Order order) {
        Order newOrder = orderService.createOrder(order);
        return ResponseEntity.ok(newOrder);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable String id) {
        return ResponseEntity.ok(orderService.findOrderById(id));
    }
    @GetMapping("/Name/{name}")
    public ResponseEntity<List<Order>> getOrderByName(@PathVariable String name) {
        return ResponseEntity.ok(orderService.getOrdersByName(name));
    }
    @GetMapping("/Item/{item}")
    public ResponseEntity<List<Order>> getOrderByItem(@PathVariable String item){
        return ResponseEntity.ok(orderService.getOrdersByItem(item));
    }
    @GetMapping("/Status/{status}")
    public ResponseEntity<List<Order>> getOrdersByStatus(@PathVariable String status) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(status));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") String id, @RequestBody Order order) {
        Order updatedOder = orderService.updateOrder(order, id);
        return updatedOder != null ? ResponseEntity.ok(updatedOder) : ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable("id") String id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

}
