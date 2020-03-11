package com.cts.project.stock.Dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.stock.pojos.StockPrice;



public interface StockPriceRepository extends CrudRepository<StockPrice,String>{

	

}
