package com.example.demo.controllers;

import com.example.demo.entity.Article;
import com.example.demo.service.ArticleService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import com.example.demo.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@Controller
@RequestMapping("dead-journal/user")
public class UserController {

    @Autowired
    UserService userAccountService;
    @Autowired
    ArticleService articleService;
    @Autowired
    HomeController homeController;

    @GetMapping
    String getProfile(Model model, @PathVariable Long nickname){

//        model.addAttribute("user", user);
        return "profile";
    }

    @PostMapping("/info")
    ResponseEntity updateProfileDescription(@RequestParam String description){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println("I was updateProfiel");
        userAccountService.updateDescription(user, description);
        return new ResponseEntity(HttpStatus.OK);
    }

    public @PostMapping("/{nickname}/article")
    ResponseEntity createNewArticle(@PathVariable String nickname, @RequestParam String title,
                          @RequestParam String description, @RequestParam String full_text) throws Exception {
        System.out.println(title+ description);
        System.out.println("hello");
        userAccountService.saveArticle(nickname,title, description, full_text);
        return new ResponseEntity(HttpStatus.OK);
    }

    public @GetMapping("/{nickname}/article/{articleId}")
    ResponseEntity deleteArticle(@PathVariable String nickname, @PathVariable Long articleId) throws Exception {
        Optional<Article> article = articleService.findById(articleId);
        article.orElseThrow(() -> new Exception("no article with such id " + articleId));
        if (!nickname.equals(article.get().getUser().getNickname())){
            throw new Exception(nickname + " cannot delete article with id = "+ articleId);
        }
        articleService.deleteArticleById(articleId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/getByEmail")
    String getUserByEmail(String email){
        return userAccountService.getUserByEmail(email).getPassword();
    }





}
