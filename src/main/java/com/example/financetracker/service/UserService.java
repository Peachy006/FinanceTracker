package com.example.financetracker.service;

import com.example.financetracker.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();

    User getUserById(long id);

    boolean deleteUser(long id);

    User updateUser(long id, User user);
}
