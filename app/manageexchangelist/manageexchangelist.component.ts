import { Component, OnInit } from '@angular/core';
import { ManageexchangeService } from '../manageexchange.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Manageexchange } from '../manageexchange';

@Component({
  selector: 'app-manageexchangelist',
  templateUrl: './manageexchangelist.component.html',
  styleUrls: ['./manageexchangelist.component.css']
})
export class ManageexchangelistComponent implements OnInit {
  
  constructor(private router:Router,private manageexchangeservice:ManageexchangeService) { }  
 manageexchangeList: Observable<any []>;   
   ngOnInit() {  
     this.manageexchangeservice.getAllStockExchange().subscribe(data =>{  
     this.manageexchangeList =data;  
  })  ;
};
  deleteStockExchange(user: Manageexchange ) {
    this.manageexchangeservice.deleteStockExchange(user.id).subscribe(data =>{
   this.manageexchangeservice.getAllStockExchange().subscribe(data =>{
  this.manageexchangeList =data;
      });
  
    });
  
     
    }
    updateStockExchange(manageexchange: Manageexchange ) {

      window.localStorage.removeItem("edit-id");
     
     
     
      window.localStorage.setItem("edit-id", manageexchange.id.toString());
     
     
     
      this.router.navigate(['manageexchange']);
     
     
     
      }
    }
  
  
