import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { StockPriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';


@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
  router: any;

 
  constructor(private stockpriceservice:StockPriceService) { }  
  
  stockprice : Stockprice=new Stockprice();  
  submitted = false;  
  
  ngOnInit() {  
    var companycode = window.localStorage.getItem("edit-companyCode");



  if (companycode != null && companycode != "") {

   // this.message = "Update Recored";



   this.stockpriceservice.findOneInAll5(companycode)



    .subscribe(data => {

     this.stockprice = data; this.stockpricesaveform.setValue(this.stockprice)



    });



  }

  this.submitted = false;

 } 
  
  
  stockpricesaveform=new FormGroup({ 
    companyCode:new FormControl(), 
    currentPrice:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    stockExchange:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    

  });  
  
  saveStockPrice(saveStockPrice){  
    this.stockprice=new Stockprice();   
    this.stockprice.companyCode=this.CompanyCode.value;  
    this.stockprice.stockExchange=this.StockExchange.value;  
    this.stockprice.currentPrice=this.CurrentPrice.value;  
    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.stockpriceservice.saveStockPrice(this.stockprice)  
    .subscribe(data => console.log(data), error => console.log(error));


    this.stockprice = new Stockprice();  
    window.localStorage.removeItem("edit-companyCode");
    this.router.navigate(['home']);
  }  
  get CompanyCode(){  
    return this.stockpricesaveform.get('companyCode');  
  } 
  
  get StockExchange(){  
    return this.stockpricesaveform.get('stockExchange');  
  }  
  
  get CurrentPrice(){  
    return this.stockpricesaveform.get('currentPrice');  
  }  
  
  
  
  saveStockpriceForm(){  
    this.submitted=false;  
    this.stockpricesaveform.reset();  
  }  
}  


