package com.cts.project;



import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cts.project.pojos.Ipos;
@FeignClient(value = "jcompany", url = "http://localhost:8094/ipos/")



public interface JSONCompanyClient {







 @GetMapping("/findByCompanyName/{companyName}")



 public List<Ipos> findByCompanyName(@PathVariable("companyName") String companyName);

}