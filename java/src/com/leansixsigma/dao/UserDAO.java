package com.leansixsigma.dao;

import com.leansixsigma.model.User;
import com.leansixsigma.util.DatabaseConnection;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;

public class UserDAO {
    
    public boolean registerUser(User user) {
        String sql = "INSERT INTO Users (Username, Email, PasswordHash, FirstName, LastName) VALUES (?, ?, ?, ?, ?)";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getEmail());
            pstmt.setString(3, hashPassword(user.getPasswordHash()));
            pstmt.setString(4, user.getFirstName());
            pstmt.setString(5, user.getLastName());
            
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
            
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    
    public User authenticateUser(String username, String password) {
        String sql = "SELECT * FROM Users WHERE Username = ? AND IsActive = 1";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, username);
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                String storedHash = rs.getString("PasswordHash");
                String inputHash = hashPassword(password);
                
                if (storedHash.equals(inputHash)) {
                    User user = new User();
                    user.setUserId(rs.getInt("UserId"));
                    user.setUsername(rs.getString("Username"));
                    user.setEmail(rs.getString("Email"));
                    user.setFirstName(rs.getString("FirstName"));
                    user.setLastName(rs.getString("LastName"));
                    user.setBeltLevel(rs.getString("BeltLevel"));
                    user.setRegistrationDate(rs.getTimestamp("RegistrationDate"));
                    user.setActive(rs.getBoolean("IsActive"));
                    
                    // Update last login
                    updateLastLogin(user.getUserId());
                    
                    return user;
                }
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return null;
    }
    
    private void updateLastLogin(int userId) {
        String sql = "UPDATE Users SET LastLogin = GETDATE() WHERE UserId = ?";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, userId);
            pstmt.executeUpdate();
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    private String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = md.digest(password.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hashedBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }
    
    public boolean checkUsernameExists(String username) {
        String sql = "SELECT COUNT(*) FROM Users WHERE Username = ?";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, username);
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                return rs.getInt(1) > 0;
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return false;
    }
}
