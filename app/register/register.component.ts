import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  email: any;  
  selectedFiles: FileList;
  
  constructor(private router:Router,private userservice:UserService) { }  
  
  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {  
    var userid = window.localStorage.getItem("edit-id");



  if (userid != null && userid != "") {

   // this.message = "Update Recored";



   this.userservice.findOneInAll6(parseInt(userid))



    .subscribe(data => {

     this.user = data; this.usersaveform.setValue(this.user)



    });



  }

  this.submitted = false;

 }
 selectFile(event) {  
  const file = event.target.files.item(0);  
 
  if (file.type.match('image.*')) {  
    var size = event.target.files[0].size;  
    if(size > 1000000)  
    {  
        alert("size must not exceeds 1 MB");  
        this.usersaveform.get('profileImage').setValue("");  
    }  
    else  
    {  
      this.selectedFiles = event.target.files;  
    }  
  } else {  
    alert('invalid format!');  
  }  

}     
  
  usersaveform=new FormGroup({ 
    id:new FormControl(), 
    confirmed:new FormControl(), 
    password:new FormControl(), 
    userName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    userType:new FormControl(),
    mobileNumber:new FormControl(),
    profileImage:new FormControl()
  

  });  
  
  saveUser(saveUser){  
    this.user=new User();   
    this.user.id=this.Id.value;  
    this.user.userName=this.userName.value;  
    this.user.email=this.Email.value;  
    this.user.userType=this.userType.value; 
    this.user.password=this.password.value;
    this.user.mobileNumber=this.mobileNumber.value;
    this.user.confirmed=this.confirmed.value;
this.user.profileImage=this.ProfileImage.value;
   
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userservice.saveUser(this.user)  
    .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User(); 
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home']);
  }  
  get Id(){  
    return this.usersaveform.get('id');  
  } 
  
  get userName(){  
    return this.usersaveform.get('userName');  
  }  
  
  get Email(){  
    return this.usersaveform.get('email');  
  }  
  
  
  get userType(){  
    return this.usersaveform.get('userType');  
  }  
  get password(){  
    return this.usersaveform.get('password');  
  } 
  get mobileNumber(){  
    return this.usersaveform.get('mobileNumber');  
  } 
  get confirmed(){  
    return this.usersaveform.get('confirmed');  
  } 
  get ProfileImage(){
    return this.usersaveform.get('profileImage');
  }
  
  saveUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  }  
}  
