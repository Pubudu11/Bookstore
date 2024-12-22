package com.example.bookstore.Service.impl;

import com.example.bookstore.Model.Order;
import com.example.bookstore.Model.User;
import com.example.bookstore.Repository.OrderRepository;
import com.example.bookstore.Service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service


public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order createOrder(Order order) {
        Order newOrder = orderRepository.save(order);
        return newOrder;
    }
    @Override
    public Order findOrderById(String id){
        Optional<Order> order = orderRepository.findById(id);
        if(order.isPresent()){
            return order.get();
        }
        else {
            return null;
        }
    }

    @Override
    public List<Order> getAllOrders(){
        List<Order> orders = orderRepository.findAll();
        return orders;
    }
    @Override
    public Order updateOrder(Order order, String id) {
        Order currentOder = orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Order not found"));
        currentOder.setName(order.getName());
        currentOder.setAddress(order.getAddress());
        currentOder.setPhone(order.getPhone());
        currentOder.setEmail(order.getEmail());
        currentOder.setPrice(order.getPrice());
        currentOder.setItem(order.getItem());
        currentOder.setStatus(order.getStatus());
        orderRepository.save(currentOder);
        return currentOder;
    }
    @Override
    public void deleteOrder(String id) {
        orderRepository.deleteById(id);
    }
    @Override
    public  List<Order> getOrdersByName(String name){
        return orderRepository.findByName(name);
    }
    @Override
    public  List<Order> getOrdersByItem(String item){
        return  orderRepository.findByItem(item);
    }
    @Override
    public List<Order> getOrdersByStatus(String status){
        return  orderRepository.findByStatus(status);
    }
}
