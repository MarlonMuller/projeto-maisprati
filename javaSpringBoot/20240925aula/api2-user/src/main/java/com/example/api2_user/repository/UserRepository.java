package com.example.api2_user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.api2_user.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {}
