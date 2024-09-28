package com.example.api2_user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class Api2UserApplication {

	public static void main(String[] args) {

		SpringApplication.run(Api2UserApplication.class, args);
	}

}

// @SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
