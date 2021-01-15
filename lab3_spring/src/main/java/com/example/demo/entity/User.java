package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user", schema = "public")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private Long id;
    @Getter
    @Setter
    private String password;
    @Column(unique = true)
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private boolean enabled;
    @Getter
    @Setter
    private String nickname;
    @Getter
    @Setter
    private String description;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    @Getter
    @Setter
    private Set<Article> articleList = new HashSet<>();

    public User() {
    }
    public User(String email, String password, String nickname) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.enabled = true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

}

// Побликуюсь почти нигде. Но волнует это меня не больше, чем перспектива собственной смерти