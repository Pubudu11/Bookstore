package com.example.bookstore.Controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


import com.example.bookstore.Model.*;
import com.example.bookstore.Payload.Request.TokenRefreshRequest;
import com.example.bookstore.Service.impl.RefreshTokenServiceImpl;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.Payload.Request.LoginRequest;
import com.example.bookstore.Payload.Request.SignUpRequest;
import com.example.bookstore.Payload.Response.JwtResponse;
import com.example.bookstore.Payload.Response.MessageResponse;
import com.example.bookstore.Repository.RoleRepository;
import com.example.bookstore.Repository.UserRepository;
import com.example.bookstore.Repository.AdminRepository;
import com.example.bookstore.Repository.RefreshTokenRepository;
import com.example.bookstore.Security.JWT.JwtUtils;
import com.example.bookstore.Security.Services.UserDetailsImpl;
import com.example.bookstore.Security.Services.AdminDetailsImpl;




@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	AdminRepository adminRepository;
	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	RefreshTokenRepository refreshTokenRepository;

	@Autowired
	private RefreshTokenServiceImpl refreshTokenService;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	public List<String> getRolesFromAuthentication(Authentication authentication) {
		if (authentication != null && authentication.isAuthenticated() && !(authentication instanceof AnonymousAuthenticationToken)) {
			return authentication.getAuthorities().stream()
					.map(GrantedAuthority::getAuthority)
					.collect(Collectors.toList());
		}
		return null;
	}


	@PostMapping("/user/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication existingAuth = SecurityContextHolder.getContext().getAuthentication();

		if (existingAuth != null && existingAuth.isAuthenticated() && !(existingAuth instanceof AnonymousAuthenticationToken)) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: User is already signed in!"));
		}

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		if (!roles.contains("ROLE_USER")) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid User !"));
		}
		return ResponseEntity.ok(new JwtResponse(jwt,"refreshToken",
				userDetails.getId(),
				userDetails.getUsername(),
				userDetails.getEmail(),
				roles));
	}

	@PostMapping("/user/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}
		if (adminRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}


		// Create new user's account
		User user = new User(signUpRequest.getUsername(), 
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));


		Set<Role> roles = new HashSet<>();
		roles.add(roleRepository.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found.")));

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
	@PostMapping("admin/signup")
	public ResponseEntity<?> registerAdmin(@Valid @RequestBody SignUpRequest signUpRequest) {
		if (adminRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Admin Username is already taken!"));
		}
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Admin Username is already taken!"));
		}

		if (adminRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Admin Email is already in use!"));
		}

		// Create new admin  account
		Admin admin = new Admin(signUpRequest.getUsername(),
				encoder.encode(signUpRequest.getPassword()),
				signUpRequest.getEmail());

		Set<Role> roles = new HashSet<>();

		roles.add(roleRepository.findByName(ERole.ROLE_ADMIN)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found.")));
		admin.setRoles(roles);
		adminRepository.save(admin);

		return ResponseEntity.ok(new MessageResponse("Admin registered successfully!"));
	}

	@PostMapping("/admin/signin")
	public ResponseEntity<?> authenticateAdmin(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication existingAuth = SecurityContextHolder.getContext().getAuthentication();
		List<String> existingRoles = getRolesFromAuthentication(existingAuth);
		if (existingAuth != null && existingAuth.isAuthenticated() && !(existingAuth instanceof AnonymousAuthenticationToken) && existingRoles.contains("ROLE_ADMIN")) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Admin is already signed in!"));
		}

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl adminDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = adminDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		if (!roles.contains("ROLE_ADMIN")) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: User cannot sign in as admin!"));
		}

		return ResponseEntity.ok(new JwtResponse(jwt,"refreshToken",
				adminDetails.getId(),
				adminDetails.getUsername(),
				adminDetails.getEmail(),
				roles));
	}
	//	@PostMapping("/admin/signin")
//	public ResponseEntity<?> authenticateAdmin(@Valid @RequestBody LoginRequest loginRequest) {
//
//		Authentication authentication = authenticationManager.authenticate(
//				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//
//		SecurityContextHolder.getContext().setAuthentication(authentication);
//		String jwt = jwtUtils.generateJwtToken(authentication);
//
//		AdminDetailsImpl adminDetails = (AdminDetailsImpl) authentication.getPrincipal();
//		List<String> roles = adminDetails.getAuthorities().stream()
//				.map(item -> item.getAuthority())
//				.collect(Collectors.toList());
//
//		return ResponseEntity.ok(new JwtResponse(jwt,
//				adminDetails.getId(),
//				adminDetails.getUsername(),
//				adminDetails.getEmail(),
//				roles));
//	}

	@PostMapping("/refresh-token")
	public ResponseEntity<String> refreshToken(@Valid @RequestBody TokenRefreshRequest request) {
		String requestRefreshToken = request.getRefreshToken();

		return refreshTokenRepository.findByToken(requestRefreshToken)
				.map(refreshTokenService::verifyExpiration)
				.map(RefreshToken::getUserId)
				.map(userId -> {
					String token = jwtUtils.generateTokenFromUserId(userId);
					return ResponseEntity.ok(token);
				})
				.orElseThrow(() -> new RuntimeException("Refresh token is not in database!"));
	}
}
