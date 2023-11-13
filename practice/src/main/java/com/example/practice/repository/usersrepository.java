package com.example.practice.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.practice.entity.users;

public interface usersrepository extends CrudRepository<users,Integer> {

}
