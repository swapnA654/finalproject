import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private baseUrl = 'http://localhost:8089/sector/sectors/';
  

  
  constructor(private http:HttpClient) { }  
  
  getAllSectors(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllSectors');  
  }  
  
  saveSectors(sector: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveSectors', sector);  
  }  
  
  deleteSector(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteSector/${id}`, { responseType: 'text' });  
  }  
  
  findOneInAll3(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll3/${id}`);  
  }  
  
  updateSectors(id: number, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}/updateSectors/${id}`, value);  
  }  
    
}  