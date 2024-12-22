package com.example.bookstore.Service;

import com.example.bookstore.Model.Order;

import java.util.List;

public interface OrderService {
    Order createOrder(Order order);
    Order findOrderById(String id);
    List<Order> getAllOrders();
    Order updateOrder(Order order, String id);
    void deleteOrder(String id);

    List<Order> getOrdersByName(String name);
    List<Order> getOrdersByItem(String item);
    List<Order> getOrdersByStatus(String status);

}
