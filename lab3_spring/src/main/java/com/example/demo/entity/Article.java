package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "article", schema = "public")
public class Article{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private Long id;
    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Getter
    @Setter
    private String title;
    @Getter
    @Setter
    private String description;
    @Getter
    @Setter
    @Column(name = "full_text")
    private String fullText;

    public Article(User user, String title, String description, String fullText) {
        this.user = user;
        this.title = title;
        this.description = description;
        this.fullText = fullText;
    }

    public Article(){

    }
}

// Побликуюсь почти нигде. Но волнует это меня не больше, чем перспектива собственной смерти