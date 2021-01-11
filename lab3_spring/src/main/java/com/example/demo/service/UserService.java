package com.example.demo.service;

import com.example.demo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.demo.entity.User;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;


    public void signUp(){

    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public boolean isExists(String login, String password){
        return (login.equals("abc") && password.equals("12345"));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        else{
            return user;
        }
    }
}
