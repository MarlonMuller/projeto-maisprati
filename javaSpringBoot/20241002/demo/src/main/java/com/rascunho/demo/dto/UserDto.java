package com.rascunho.demo.dto;

import lombok.Data;

@Data

public class UserDto {

    private int id;
    private String username;
    private String password;
    private String email;
    private String role;

}
