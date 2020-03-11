import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
  
export class IposService {
  
  
  private baseUrl = 'http://localhost:8089/Ipos/ipos';;  
  
  constructor(private http:HttpClient) { }  
  
  getAllIpos(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllIpos');  
  }  
  
  saveIpos(Ipos: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveIpos', Ipos);  
  }  
  
  deleteIpos(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteIpos/${id}`, { responseType: 'text' });  
  }  
  
  findOneInAll2(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll2/${id}`);  
  }  
  
  updateIpos(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateIpos/${id}`, value);  
  }  
    
}  