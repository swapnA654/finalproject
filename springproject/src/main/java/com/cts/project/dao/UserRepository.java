package com.cts.project.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.pojos.User;

public interface UserRepository extends CrudRepository<User,String> {

	
	

}
