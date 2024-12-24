package com.example.bookstore.Service;

import com.example.bookstore.Model.Customer;

import java.util.List;

public interface CustomerService {
    Customer addCustomer(Customer customer);
    Customer getCustomerById(String id);
    List<Customer> getAllCustomers();
    Customer updateCustomer(Customer customer, String id);
    void deleteCustomer(String id);

}
