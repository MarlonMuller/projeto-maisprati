package com.example.api2_user.dto;

import lombok.Data;
@Data
public class UserDTO {
    private int id;
    private String username;
    private String password;
    private String email;
    private String role;
}
