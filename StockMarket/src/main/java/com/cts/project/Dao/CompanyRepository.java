package com.cts.project.Dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.pojos.Company;



public interface CompanyRepository extends CrudRepository<Company,String> {

}
