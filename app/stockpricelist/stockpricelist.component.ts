import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { StockPriceService } from '../stockprice.service';
import { Router } from '@angular/router';
import { Stockprice } from '../stockprice';


@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {
  
  
  constructor(private router:Router,private stockpriceservice:StockPriceService) { }  
   
  stockpriceList: Observable<any []>;   
    
   
   ngOnInit() {  
      
     this.stockpriceservice.getAllStockPrice().subscribe(data =>{  
     this.stockpriceList =data;  
   
     });
    }
     deleteStockPrice(stockprice: Stockprice ) {

      this.stockpriceservice.deleteStockPrice(stockprice.companyCode).subscribe(data =>{
    
     this.stockpriceservice.getAllStockPrice().subscribe(data =>{
    
    this.stockpriceList =data;
    
    
    
        });
    
    
    
       
    });
  }
  updateStockPrice(sp : Stockprice ) {

    window.localStorage.removeItem("edit-companyCode");
   
   
   
    window.localStorage.setItem("edit-companyCode", sp.companyCode.toString());
   
   
   
    this.router.navigate(['stockprice']);
   
   
   
    }
}