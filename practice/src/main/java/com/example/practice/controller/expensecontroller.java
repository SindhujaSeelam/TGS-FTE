package com.example.practice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice.entity.expenses;
import com.example.practice.entity.users;
import com.example.practice.repository.expenserepository;
import com.example.practice.repository.usersrepository;

@RestController
@CrossOrigin
@RequestMapping("")
public class expensecontroller {

	@Autowired
	expenserepository er;
	
	@Autowired
	usersrepository ur;
	
	@GetMapping("/data")
	public Iterable<expenses> displaydata()
	{
		Iterable<expenses> e=er.findAll();
		return e;
	}
	
	
	@GetMapping("/usersdata")
	public Iterable<users> getusersdata() {
		
		Iterable<users> users=ur.findAll();
		
		return users;
	}
	
	@PostMapping("/register")
	public void register(@RequestBody users u) {
		ur.save(u);
	}
	
	@PostMapping("/editdata")
	public void editdata(@RequestBody expenses e) {
		er.save(e);
		
	}
	
	@PostMapping("/adddata")
	public void adddata(@RequestBody expenses e)
	{
		er.save(e);
	}
	
	@GetMapping("/delete/{id}")
	public void delete(@PathVariable("id") int id) {
		er.deleteById(id);
		
	}
}
