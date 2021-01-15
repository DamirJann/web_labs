package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String mail);
    Optional<User> findById(Long id);
    Optional<User> getUserByNickname(String nickname);
    List<User> findAllByIdNotIn(Collection<Long> id);
}