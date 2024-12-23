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
    public
}
