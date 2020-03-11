import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stockprice } from '../stockprice';
import { Sector } from '../sector';
import { HighchartsService } from '../highcharts.service';
import { Managecompany } from '../managecompany';
import { ManageCompanyService } from '../managecompany.service';
import { SectorService } from '../sector.service';
import { StockPriceService } from '../stockprice.service';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {

  @ViewChild('charts') public chartEl: ElementRef;





 myGroup: FormGroup;
  




 constructor(private hcs: HighchartsService,
  private formBuilder: FormBuilder,
  private router:Router,
  private companyservice:ManageCompanyService,
  private sectorservice:SectorService,
  private stockpriceservice:StockPriceService) { }

 companyList: Managecompany[];

 companyListAll: Managecompany[];

 sectorsList: Sector[];

 stockpriceList: Observable<Stockprice[]>;

 ngOnInit() {

  this.hcs.createChart(this.chartEl.nativeElement);

  this.myGroup= this.formBuilder.group({

   "choose": new FormControl([ Validators.required ]),

   "sectorName": new FormControl([ Validators.required ]),

   "companyName": new FormControl([ Validators.required ]),

   "fromdate":new FormControl([ Validators.required ]),

   "todate":new FormControl([ Validators.required ])

   })

  this.companyservice.getAllCompany().subscribe(data => {

   this.companyList = data;

   this.companyListAll=data;

   this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;

   })

   this.stockpriceservice.getAllStockPrice().subscribe(data => {

   this.stockpriceList = data;

   })

   this.sectorservice.getAllSectors().subscribe(data => {

    this.sectorsList = data;

    })





 }

 sectorChange()

 {

  alert(1234);

  var sectorValue=this.myGroup.controls['sectorName'].value;

  this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;

 }

}












