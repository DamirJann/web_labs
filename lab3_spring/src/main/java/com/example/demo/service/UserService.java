package com.example.demo.service;

import com.example.demo.entity.Article;
import com.example.demo.repository.ArticleRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.demo.entity.User;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ArticleRepository articleRepository;


    public void signUp(){

    }

    public void updateDescription(User user, String description){
        user.setDescription(description);
        userRepository.save(user);
    }

    public Optional<User> getUserByNickname(String nickname){
        return userRepository.getUserByNickname(nickname);
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

    public void signUp(String email, String password, String nickname){
        User user = new User(email, password, nickname);
        userRepository.save(user);
    }



    public ArrayList<User> getAll(){
        return (ArrayList<User>) userRepository.findAll();
    }

    public List<User> getFriends(Long userId){
        return  userRepository.findAllByIdNotIn(Collections.singleton(userId));
    }

    public void saveArticle(String nickname, String title, String description, String fullText) throws Exception {
        Optional<User> user = userRepository.getUserByNickname(nickname);
        user.orElseThrow(() -> new Exception("no user with such nickname: " + nickname));
        articleRepository.save(new Article(user.get() ,title, description, fullText));
        userRepository.save(user.get());
    }

}
