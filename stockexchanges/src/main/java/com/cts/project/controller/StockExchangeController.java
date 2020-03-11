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

import com.cts.project.Dao.StockExchangeRepository;
import com.cts.project.pojos.StockExchange;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/stockexchange")

public class StockExchangeController {

 @Autowired
 private StockExchangeRepository stockexchangeRepository;
 @RequestMapping("/getAllStockExchange")
 public Iterable<StockExchange> getAllStockExchange()
 {
 return stockexchangeRepository.findAll();
 }
 @PostMapping("/saveStockExchange")
 public StockExchange savestockexchange(@RequestBody StockExchange stockexchange)
 {
 System.out.println(stockexchange);
 stockexchangeRepository.save(stockexchange);
 return stockexchange;
 }
 @PutMapping("/updateStockExchange/{id}")
 public StockExchange updatestockexchange(@RequestBody StockExchange stockexchange,@PathVariable("id") int id)
 {
	 stockexchange.setId(id);
 System.out.println(stockexchange);
 stockexchangeRepository.save(stockexchange);
 return stockexchange;
 }
 @DeleteMapping("/deleteStockExchange/{id}")
 public Boolean deletestockexchange(@PathVariable("id") Integer id)
 {
 System.out.println(id);
 stockexchangeRepository.deleteById(id);
 return true;
 }
 @GetMapping("/findOneInAll4/{id}")
 public StockExchange findoneinall(@PathVariable("id") Integer id)
 {
 Optional<StockExchange> stockexchange= stockexchangeRepository.findById(id);
 return stockexchange.get();
 }

}


