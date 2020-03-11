import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';
import { ManageexchangeService } from '../manageexchange.service';
import { Manageexchange } from '../manageexchange';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {
  constructor(private router:Router,private manageexchangeservice:ManageexchangeService) { }  
  
  exchange : Manageexchange=new Manageexchange();  
  submitted = false;  
  
  ngOnInit() {  
    var id = window.localStorage.getItem("edit-id");
  if (id != null && id != "") {

   // this.message = "Update Recored";
   this.manageexchangeservice.findOneInAll4(parseInt(id))
    .subscribe(data => {
      this.manageexchange = data; this.exchangesaveform.setValue(this.manageexchange)
    });
  }

  this.submitted = false;

 } 
  
  exchangesaveform=new FormGroup({ 
    id:new FormControl(), 
    stockExchange:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
    brief:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),   
    contactAddress:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
    remarks:new FormControl('',[Validators.required,Validators.minLength(3)]),  
  });  

  saveStockExchange(saveStockExchange){  
    this.exchange=new Manageexchange();   
    this.exchange.id=this.Id.value;  
    this.exchange.stockExchange=this.StockExchange.value;  
    this.exchange.brief=this.Brief.value;  
    this.exchange.contactAddress=this.ContactAddress.value; 
    this.exchange.remarks=this.Remarks.value;
    this.submitted = true;  
    this.save();  
  } 
  save() {  
    this.manageexchangeservice.saveStockExchange(this.exchange)  
    .subscribe(data => console.log(data), error => console.log(error));


    this.exchange = new Manageexchange();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home']);
  }  
  manageexchange(manageexchange: any) {
    throw new Error("Method not implemented.");
  }
  stockexchange(stockexchange: any) {
    throw new Error("Method not implemented.");
  }
  get Id(){  
    return this.exchangesaveform.get('id');  
  } 
  
  get StockExchange(){  
    return this.exchangesaveform.get('stockExchange');  
  }  
  
  get ContactAddress(){  
    return this.exchangesaveform.get('contactAddress');  
  }  
  
  
  get Remarks(){  
    return this.exchangesaveform.get('remarks');  
  }  
  get Brief(){  
    return this.exchangesaveform.get('brief');  
  }  
  
  saveexchangeForm()
  {
    this.submitted=false;
    this.exchangesaveform.reset();
  }
   
}  

