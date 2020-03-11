import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';
import { Observable } from 'rxjs';
import { Ipos } from '../ipos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iposlist',
  templateUrl: './iposlist.component.html',
  styleUrls: ['./iposlist.component.css']
})
export class IposlistComponent implements OnInit {
  

  constructor(private router:Router,private iposservice:IposService) { }
  iposList: Observable<any []>; 
  ngOnInit() {
    this.iposservice.getAllIpos().subscribe(data =>{  
      this.iposList =data;  
  });
};
  deleteIpos(ipos: Ipos ) {

    this.iposservice.deleteIpos(ipos.id).subscribe(data =>{
  
   this.iposservice.getAllIpos().subscribe(data =>{
  
  this.iposList =data;
  
  
  
      });
  
  
  
     
  });

  }
  updateIpos(user : Ipos ) {

    window.localStorage.removeItem("edit-id");
   
   
   
    window.localStorage.setItem("edit-id", user.id.toString());
   
   
   
    this.router.navigate(['ipos']);
   
   
   
    }
}
