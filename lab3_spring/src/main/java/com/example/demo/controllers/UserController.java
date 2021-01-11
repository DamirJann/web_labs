package com.example.demo.controllers;

import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import com.example.demo.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userAccountService;


    @GetMapping("/personal_page")
    String getUserPage(Model model){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("user", user);
        return "personal_page";
    }

    @PostMapping("/sign-up")
    String get_signUp_(){
        return "sign_up";
    }

    @GetMapping("/getByEmail")
    String getUser(String email){
        return userAccountService.getUserByEmail(email).getPassword();
    }

    @PostMapping("/friends")
    String getBlogsOfFriends(){
        return "friends_page";
    }

    @PutMapping("/signup")
    public String signUp(@RequestParam String nickName, @RequestParam String email, @RequestParam String password){
        return null;
    }
}
