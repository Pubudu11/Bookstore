package com.example.bookstore.Security.Services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.bookstore.Model.Admin;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class AdminDetailsImpl extends UserDetailsImpl implements UserDetails {


    public AdminDetailsImpl(String id, String username, String email, String password,
                           Collection<? extends GrantedAuthority> authorities) {
        super(id, username, email, password, authorities);
    }
    public static AdminDetailsImpl build(Admin admin) {
        List<GrantedAuthority> authorities = admin.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());
        return new AdminDetailsImpl(
                admin.getId(),
                admin.getUsername(),
                admin.getEmail(),
                admin.getPassword(),
                authorities);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AdminDetailsImpl admin = (AdminDetailsImpl) o;
        return Objects.equals(this.getId(), admin.getId());
    }
}

