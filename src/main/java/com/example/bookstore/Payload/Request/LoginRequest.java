package com.example.bookstore.Payload.Request;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
	private String username;

	@NotBlank
	private String password;

	@NotBlank
	private String role;


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public @NotBlank String getRole() {
		return role;
	}

	public void setRole(@NotBlank String role) {
		this.role = role;
	}
}

