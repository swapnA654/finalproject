package com.cts.project.Dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.pojos.Company;
import com.cts.project.pojos.StockPrice;

public interface StockPriceRepository extends CrudRepository<StockPrice,String>{

	

}
