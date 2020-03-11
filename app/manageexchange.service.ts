import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ManageexchangeService {
  saveExchange(exchange: import("./manageexchange").Manageexchange) {
    throw new Error("Method not implemented.");
  }

  private baseUrl = 'http://localhost:8089/stockexchanges/stockexchange';
  

  
  constructor(private http:HttpClient) { }  
  
  getAllStockExchange(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllStockExchange');  
  }  
  
  saveStockExchange(stock: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveStockExchange', stock);  
  }  
  
  deleteStockExchange(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteStockExchange/${id}`, { responseType: 'text' });  
  }  
  
  findOneInAll4(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll4/${id}`);  
  }  
  
  updateStockExchange(id: number, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}/updateStockExchange/${id}`, value);  
  }  
    
}  