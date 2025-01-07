package com.example.bookstore.Service;

import com.example.bookstore.Model.RefreshToken;
import org.springframework.beans.factory.annotation.Value;

public interface RefreshTokenService {
    RefreshToken createRefreshToken(String userId) ;
    RefreshToken verifyExpiration(RefreshToken token);
    void deleteByUserId(String token);
}
