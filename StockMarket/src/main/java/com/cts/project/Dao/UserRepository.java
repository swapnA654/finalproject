package com.cts.project.Dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.pojos.User;

public interface UserRepository extends CrudRepository<User,Integer> {
	User  findByUserNameAndPassword(String userName,String password);
	Optional<User> findByEmail(String email);
	User  findByUserNameAndPasswordAndConfirmed(String userName,String password,String string);
	

}
