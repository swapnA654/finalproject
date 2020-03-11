import { Component, OnInit } from '@angular/core';
import { ManageCompanyService } from '../managecompany.service';
import { Managecompany } from '../managecompany';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {
  managecompanyservice: any;
  

  constructor(private router:Router,private companyservice:ManageCompanyService) { }
  company : Managecompany = new Managecompany();
  submitted = false;
  ngOnInit() {  
    var id = window.localStorage.getItem("edit-companyName");



  if (id != null && id != "") {

   // this.message = "Update Recored";



   this.companyservice.findOneInAll1((id))



    .subscribe(data => {

      this.company = data; this.companysaveform.setValue(this.company)



    });



  }

  this.submitted = false;

 } 
  
  
  companysaveform=new FormGroup({ 
    companyName:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    brief:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    turnOver:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    ceo:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
    boardOfDirectors:new FormControl('',[Validators.required,Validators.minLength(3)]),  
    listedInStockExchanges:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    sector:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    stockCode:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
  

  });  
  
  saveCompany(saveCompany){  
    this.company=new Managecompany();   
    this.company.companyName=this.CompanyName.value;  
    this.company.brief=this.Brief.value;  
    this.company.ceo=this.Ceo.value;  
    this.company.turnOver=this.TurnOver.value; 
    this.company.boardOfDirectors=this.BoardOfDirectors.value;
    this.company.listedInStockExchanges=this.ListedInStockExchanges.value;
    this.company.sector=this.Sector.value;
    this.company.stockCode=this.StockCode.value;

    
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.companyservice.saveCompany(this.company) 
    .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Managecompany();  
    window.localStorage.removeItem("edit-companyName");
    this.router.navigate(['home']);
  }  
  get CompanyName(){  
    return this.companysaveform.get('companyName');  
  } 
  
  get Brief(){  
    return this.companysaveform.get('brief');  
  }  
  
  get TurnOver(){  
    return this.companysaveform.get('turnOver');  
  }  
  get ListedInStockExchanges(){  
    return this.companysaveform.get('listedInStockExchanges');  
  }  
  
  
  get Ceo(){  
    return this.companysaveform.get('ceo');  
  }  
  get BoardOfDirectors(){  
    return this.companysaveform.get('boardOfDirectors');  
  } 
  get StockCode(){  
    return this.companysaveform.get('stockCode');  
  } 
  get Sector(){  
    return this.companysaveform.get('sector');  
  } 
  
  companysaveForm(){  
    this.submitted=false;  
    this.companysaveform.reset();  
  }  
}  

