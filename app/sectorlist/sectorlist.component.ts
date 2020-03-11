import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sector } from '../sector';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {
  
  constructor(private router:Router,private sectorservice:SectorService) { }  
   
 sectorList: Observable<any []>;   
    
   
   ngOnInit() {  
      
     this.sectorservice.getAllSectors().subscribe(data =>{  
     this.sectorList =data;  
   
     
    })  ;
  };
    deleteSector(sector: Sector ) {

      this.sectorservice.deleteSector(sector.id).subscribe(data =>{
    
     this.sectorservice.getAllSectors().subscribe(data =>{
    
    this.sectorList =data;
    
    
    
        });
    
    
    
       
    }); 
   }  
   updateSectors(sector: Sector ) {

    window.localStorage.removeItem("edit-id");
   
   
   
    window.localStorage.setItem("edit-id", sector.id.toString());
   
   
   
    this.router.navigate(['sector']);
   
   
   
    }
  }