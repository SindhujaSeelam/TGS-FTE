package com.example.practice.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.practice.entity.expenses;

public interface expenserepository extends CrudRepository<expenses,Integer> {

}
