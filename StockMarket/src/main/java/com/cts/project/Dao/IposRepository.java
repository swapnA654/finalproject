package com.cts.project.Dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.controller.IposController;
import com.cts.project.pojos.Ipos;

public interface IposRepository extends CrudRepository<Ipos,Integer> {

}
