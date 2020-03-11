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


import com.cts.project.Dao.StockPriceRepository;

import com.cts.project.pojos.StockPrice;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stockprice")

public class StockPriceController {

	@Autowired

	private StockPriceRepository stockpriceRepository;

	@RequestMapping("/getAllStockPrice")

	public Iterable<StockPrice> getAllStockPrice()

	{

		return stockpriceRepository.findAll();

	}

	@PostMapping("/saveStockPrice")

	public StockPrice savestockprice(@RequestBody StockPrice stockprice)

	{

		System.out.println(stockprice);

		stockpriceRepository.save(stockprice);

		return stockprice;

	}

	@PutMapping("/updateStockPrice/{companyCode}")

	public StockPrice updatestockprice(@RequestBody StockPrice stockprice,
			@PathVariable("companyCode") String companycode)

	{

		stockprice.setCompanyCode("companycode");

		System.out.println(stockprice);

		stockpriceRepository.save(stockprice);

		return stockprice;

	}

	@DeleteMapping("/deleteStockPrice/{companyCode}")

	public Boolean deletestockprice(@PathVariable("companyCode") String companycode)

	{

		System.out.println(companycode);

		stockpriceRepository.deleteById(companycode);

		return true;

	}

	@GetMapping("/findOneInAll5/{companyCode}")

	public StockPrice findoneinall(@PathVariable("companyCode") String companycode)

	{

		Optional<StockPrice> stockprice = stockpriceRepository.findById(companycode);

		return stockprice.get();

	}

}
