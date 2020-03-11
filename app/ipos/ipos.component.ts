import { Component, OnInit } from '@angular/core';
import { ManageCompanyService } from '../managecompany.service';
import { Managecompany } from '../managecompany';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IposService } from '../ipos.service';
import { Ipos } from '../ipos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  constructor(private router:Router,private iposservice:IposService) { }
  ipos : Ipos = new Ipos();
  submitted = false;
  ngOnInit() {  
    var id = window.localStorage.getItem("edit-id");



  if (id != null && id != "") {

   // this.message = "Update Recored";



   this.iposservice.findOneInAll2(parseInt(id))



    .subscribe(data => {

     this.ipos = data; this.ipossaveform.setValue(this.ipos)



    });



  }

  this.submitted = false;

 }

 
  
  ipossaveform=new FormGroup({ 
    companyName:new FormControl(), 
    id:new FormControl('' , [Validators.required , Validators.minLength(3) ]), 
    pricePerShare:new FormControl('' , [Validators.required , Validators.minLength(3) ]), 
    stockExchange:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
    remarks:new FormControl('',[Validators.required,Validators.minLength(3) ]),  
    totalNumberOfShares:new FormControl(),
    opendatetime:new FormControl(),
    
  

  });  
  
  saveIpos(saveIpos){  
    this.ipos=new Ipos();   
    this.ipos.companyName=this.CompanyName.value;  
    this.ipos.id=this.Id.value;  
    this.ipos.pricePerShare=this.PricePerShare.value;  
    this.ipos.stockExchange=this.StockExchange.value; 
    this.ipos.remarks=this.Remarks.value;
    this.ipos.totalNumberOfShares=this.TotalNumberOfShares.value;
    this.ipos.opendatetime=this.Opendatetime.value;
    

    
    this.submitted = true;  
    this.save();  
  } 
  
  save() {  
    this.iposservice.saveIpos(this.ipos) 
    .subscribe(data => console.log(data), error => console.log(error));
    this.ipos = new Ipos();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home']);
  }  
  get CompanyName(){  
    return this.ipossaveform.get('companyName');  
  } 
  
  get Id(){  
    return this.ipossaveform.get('id');  
  }  
  
  get PricePerShare(){  
    return this.ipossaveform.get('pricePerShare');  
  }  
  get Opendatetime(){  
    return this.ipossaveform.get('opendatetime');  
  }  
  
  
  get StockExchange(){  
    return this.ipossaveform.get('stockExchange');  
  }  
  get Remarks(){  
    return this.ipossaveform.get('remarks');  
  } 
  get TotalNumberOfShares(){  
    return this.ipossaveform.get('totalNumberOfShares');  
  } 
  
  
  saveIposForm(){  
    this.submitted=false;  
    this.ipossaveform.reset();  
  }  
}  


