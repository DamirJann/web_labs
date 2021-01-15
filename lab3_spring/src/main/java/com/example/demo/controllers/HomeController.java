package com.example.demo.controllers;

import com.example.demo.entity.Article;
import com.example.demo.entity.User;
import com.example.demo.service.ArticleService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/dead-journal")
public class HomeController {


    @Autowired
    UserService userAccountService;
    @Autowired
    ArticleService articleService;



    @GetMapping("/profile")
    String getProfile(Model model){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("user", user);
        return "profile";
    }

    @GetMapping("/new_article")
    String getNewArticlePage(Model model){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("user", user);
        return "new_article_page";
    }

    // get profile page of user
    @GetMapping("/{nickname}")
    String getUserProfile(Model model, @PathVariable String nickname) throws Exception {
        Optional<User> user =  userAccountService.getUserByNickname(nickname);
        System.out.println("I was here");
        user.orElseThrow(() -> new Exception("no user with such nickname: " + nickname));
        model.addAttribute("user", user.get());
        model.addAttribute("articleCount", user.get().getArticleList().size());
        return "user_profile";
    }


    @GetMapping
    public String getHomePage(Model model){
        if (model.getAttribute("navigation_state") == null){
            model.addAttribute("navigation_state", 1);
        }

        if (SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof UserDetails){
            model.addAttribute("user", SecurityContextHolder.getContext().getAuthentication().getPrincipal());
            return "personal_page";
        }
        else{
            return "welcome_page";
        }
    }

    @PostMapping
    public String getHomePagePost(Model model, @RequestParam Long navigation_state){
        model.addAttribute("navigation_state", navigation_state);
        return getHomePage(model);
    }


    @GetMapping ("/{nickname}/article/{articleId}")
    String getArticle(Model model, @PathVariable Long articleId,@PathVariable String nickname) throws Exception {
        Optional<Article> article = articleService.findById(articleId);
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        article.orElseThrow(() -> new Exception("no article with such id: " + articleId));
        model.addAttribute("article", article.get());
        model.addAttribute("user", article.get().getUser());
        System.out.println(currentUser.getNickname().equals(nickname));
        model.addAttribute("isOwner", currentUser.getNickname().equals(nickname));
        return "user_article_page";
    }

    @GetMapping("/get_sign-up")
    String get_signup_page(){
        return "sign_up";
    }

    @GetMapping("/friends")
    String getBlogsOfFriends(Model model){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<User> userList = userAccountService.getFriends(user.getId());
        model.addAttribute("userList", userList);
        return "friends_page";
    }

    @PostMapping("/signup")
    public String signUp(@RequestParam String email, @RequestParam String password, @RequestParam String nickname){
        try{
            userAccountService.signUp(email, password, nickname);
            return "redirect:/dead-journal";
        }
        catch(Exception exc){
            return "sign-up";
        }
    }




    @GetMapping("/personal_page")
    String getPersonalPage(Model model){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("user", user);
        return "personal_page";
    }

    @GetMapping("/personal_blog")
    String getPersonalBlog(Model model){
        User user =
                userAccountService.getUserByNickname(
                        ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getNickname()
                ).get();
        model.addAttribute("user", user);
        System.out.println("get all personal blog. count = " + user.getArticleList().size());
        model.addAttribute("articleCount", user.getArticleList().size());
        return "personal_blog";
    }

    @PostMapping("/sign-up")
    String get_signUp_(){
        return "sign_up";
    }

    @GetMapping("/getByEmail")
    String getUser(String email){
        return userAccountService.getUserByEmail(email).getPassword();
    }


    @GetMapping("/signup_page")
    public String getSignUp(){
        return "sign-up";
    }

}
