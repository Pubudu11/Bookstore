package com.example.bookstore.Security.Services;

import com.example.bookstore.Model.Admin;
import com.example.bookstore.Model.User;
import com.example.bookstore.Repository.AdminRepository;
import com.example.bookstore.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	AdminRepository adminRepository;


	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> userOptional = userRepository.findByUsername(username);
		if (userOptional.isPresent()) {
			System.out.println("Returning UserDetailsImpl for: " + username);
			UserDetailsImpl userDetails = UserDetailsImpl.build(userOptional.get());
			return UserDetailsImpl.build(userOptional.get());
		}

		Optional<Admin> adminOptional = adminRepository.findByUsername(username);
		if (adminOptional.isPresent()) {
			System.out.println("Returning AdminDetailsImpl for: " + username);
			return (UserDetails) AdminDetailsImpl.build(adminOptional.get());
		}

		System.out.println("User or Admin not found for: " + username);
		throw new UsernameNotFoundException("User or Admin not found with username: " + username);
	}




//	@Override
//	@Transactional
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// First, check if the user exists in the User collection
//		Optional<User> user = userRepository.findByUsername(username);
//		if (user.isPresent()) {
//			return UserDetailsImpl.build(user.get());
//		}
//		// If the user exists, return the UserDetailsImpl
//		else {
//			// If not found, check if the username exists in the Admin collection
//			Admin admin = adminRepository.findByUsername(username)
//					.orElseThrow(() -> new UsernameNotFoundException("Admin Not Found with username: " + username));
//
//			// Return the AdminDetailsImpl if Admin is found
//			return AdminDetailsImpl.build(admin);
//		}
//	}
}
