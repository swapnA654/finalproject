import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  
  constructor(private router:Router,private sectorservice:SectorService) { }  
  
  sector : Sector=new Sector();  
  submitted = false;  
  ngOnInit() {  
    var id = window.localStorage.getItem("edit-id");
  if (id != null && id != "") {
   // this.message = "Update Recored";
   this.sectorservice.findOneInAll3(parseInt(id))
    .subscribe(data => {
     this.sector = data; this.sectorsaveform.setValue(this.sector)
    });
  }

  this.submitted = false;

 } 
  sectorsaveform=new FormGroup({ 
    id:new FormControl(), 
    sectorName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    brief:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
  });  
  
  saveSectors(saveSectors){  
    this.sector=new Sector();   
    this.sector.id=this.Id.value;  
    this.sector.sectorName=this.SectorName.value;  
    this.sector.brief=this.Brief.value;  
    
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.sectorservice.saveSectors(this.sector)  
    .subscribe(data => console.log(data), error => console.log(error));
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home']);
    this.sector = new Sector();  
  }  
  get Id(){  
    return this.sectorsaveform.get('id');  
  } 
  get SectorName(){  
    return this.sectorsaveform.get('sectorName');  
  }  
  get Brief(){  
    return this.sectorsaveform.get('brief');  
  }  
  saveSectorForm(){  
    this.submitted=false;  
    this.sectorsaveform.reset();  
  }  
}  

