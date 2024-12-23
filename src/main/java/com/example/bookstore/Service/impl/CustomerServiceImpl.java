package com.example.bookstore.Service.impl;

import com.example.bookstore.Model.Customer;
import com.example.bookstore.Repository.CustomerRepository;
import com.example.bookstore.Service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
    @Override
    public Customer getCustomerById(String id) {
        Optional<Customer> customer = customerRepository.findById(id);
        return customer.orElse(null);
    }
    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }
    @Override
    public Customer updateCustomer(Customer customer, String id) {
        Customer existingCustomer = customerRepository.findById(id).orElseThrow(() -> new RuntimeException("Customer not found"));
        existingCustomer.setName(customer.getName());
        existingCustomer.setAddress(customer.getAddress());
        existingCustomer.setPhone(customer.getPhone());
        existingCustomer.setEmail(customer.getEmail());
        existingCustomer.setZipcode(customer.getZipcode());
        existingCustomer.setCity(customer.getCity());
        customerRepository.save(existingCustomer);
        return existingCustomer;
    }
    @Override
    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }
}
