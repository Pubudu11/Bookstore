package com.example.bookstore.Service;

import com.example.bookstore.Model.Customer;

import java.util.List;

public interface CustomerService {
    Customer addCustomer(Customer customer);
    Customer getCustomer(String id);
    List<Customer> getCustomers();
    Customer updateCustomer(Customer customer, String id);
    void deleteCustomer(String id);

}
