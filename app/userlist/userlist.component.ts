
import { Component, OnInit } from '@angular/core';  
import { UserService } from '../user.service';  
import { User } from '../user';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Router } from '@angular/router';
  

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserListComponent implements OnInit {  
  
 constructor(private router:Router,private userservice:UserService) { }  
  
userList: Observable<any []>;   
   
  
  ngOnInit() {  
     
    this.userservice.getAllUsers().subscribe(data =>{  
    this.userList =data;  
  
    })  ;
  };
    deleteUser(user: User ) {

      this.userservice.deleteUser(user.id).subscribe(data =>{
    
     this.userservice.getAllUsers().subscribe(data =>{
    
    this.userList =data;
    
    
    
        });
    
    
    
       
    });
  }  
  updateUser(user : User ) {

    window.localStorage.removeItem("edit-id");
   
   
   
    window.localStorage.setItem("edit-id", user.id.toString());
   
   
   
    this.router.navigate(['register']);
   
   
   
    }
}
    
  

  
  

