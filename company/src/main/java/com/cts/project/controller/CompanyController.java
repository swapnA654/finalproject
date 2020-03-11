package com.cts.project.controller;



import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.cts.project.JSONCompanyClient;
import com.cts.project.Dao.CompanyRepository;
import com.cts.project.pojos.Company;


@RestController

@CrossOrigin(origins = "*")
@RequestMapping("/company")

public class CompanyController {
	 @Autowired
	 JSONCompanyClient jcompany;
 @Autowired
 



 private CompanyRepository companyRepository;



 @RequestMapping("/getAllCompany")



 public Iterable<Company> getAllCompany()



 {



 return companyRepository.findAll();



 }



 @PostMapping("/saveCompany")



 public Company savecompany(@RequestBody Company company)



 {



 System.out.println(company);



 companyRepository.save(company);



 return company;



 }







 @PutMapping("/updateCompany/{companyName}")



 public Company updatecompany(@RequestBody Company company,@PathVariable("companyName") String companyName)



 {



 company.setCompanyName(companyName);



 System.out.println(company);



 companyRepository.save(company);



 return company;



 }



 @DeleteMapping("/deleteCompany/{companyName}")



 public boolean deletecompany(@PathVariable("companyName") String companyName)



 {



 System.out.println(companyName);



 companyRepository.deleteById(companyName);



 return true;



 }



 @GetMapping("/findOneInAll1/{companyName}")



 public Company findoneinall(@PathVariable("companyName") String companyName)



 {

 Optional<Company> company= companyRepository.findById(companyName);
Company comp=company.get();
comp.setIpolist(jcompany.findByCompanyName(companyName));


 return company.get();



 }

}

