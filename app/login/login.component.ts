import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  submitted : boolean;


 constructor(private router: Router, private userservice:UserService) { }





  

  ngOnInit() {
  }
  usersaveform = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
   })
   get userName(){  
    return this.usersaveform.get('userName');  
   }
    get password(){  
      return this.usersaveform.get('password');  
    } 
  
    findByUserNameAndPassword(findByUserNameAndPassword) {
  
    this.user = new User();
    this.user.userName = this.usersaveform.get('userName').value;
    this.user.password = this.usersaveform.get('password').value;
   // this.submitted = true;
  
    this.userservice.findByUserNameAndPassword(this.user.userName, this.user.password).subscribe(data =>{



      this.user=data;
    
    
    
      if(this.user!=null && this.user.userType=='user'){
    
    
    
      this.router.navigate(['userlandingpage']);
    
    
    
      }
    
    
    
    
    
     else if(this.user!=null && this.user.userType=='admin'){
    
    
    
      this.router.navigate(['adminlandingpage']);
      }
    
    
    
      else{
    
    
    alert("invalid")
      this.router.navigate(['login'])
    
    
    
     }
    
    });
  }
}