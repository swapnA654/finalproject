package com.cts.project.controller;



import java.util.List;
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

import com.cts.project.Dao.IposRepository;
import com.cts.project.pojos.Ipos;






@RestController


@CrossOrigin(origins = "*")
@RequestMapping("/ipos")





public class IposController {

 @Autowired

 private IposRepository ipoRepository;



 @RequestMapping("/getAllIpos")



 public Iterable<Ipos> getAllIpos()



 {



 return ipoRepository.findAll();



 }



 @PostMapping("/saveIpos")



 public Ipos saveIpos(@RequestBody Ipos ipos)



 {



 System.out.println(ipos);



 ipoRepository.save(ipos);



 return ipos;



 }







 @PutMapping("/updateIpos/{id}")



 public Ipos updateipos(@RequestBody Ipos ipos,@PathVariable("id") Integer id)



 {



 System.out.println(ipos);



 ipoRepository.save(ipos);

 ipos.setId(id);



 return ipos;



 }



 @DeleteMapping("/deleteIpos/{id}")



 public Boolean deleteipos(@PathVariable("id") Integer id)



 {



 System.out.println(id);



 ipoRepository.deleteById(id);



 return true;



 }



 @GetMapping("/findOneInAll2/{id}")



 public Ipos findoneinall(@PathVariable("id") Integer id)



 {

 Optional<Ipos> ipos= ipoRepository.findById(id);



 return ipos.get();



 }



 @GetMapping("/findByCompanyName/{companyName}")

 public List<Ipos> findByCompanyName(@PathVariable("companyName") String companyName)


 {

 List<Ipos> ipo = ipoRepository.findByCompanyName(companyName);


 return ipo;

 }



}

