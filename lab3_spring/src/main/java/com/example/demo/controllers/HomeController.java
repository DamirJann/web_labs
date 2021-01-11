package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {

    @GetMapping
    public String getHomePage(){

        return "home";
    }

    @GetMapping("/get_sign-up")
    String get_signup_page(){
        return "sign_up";
    }


}
