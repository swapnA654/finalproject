import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class ManageCompanyService {
 
  private baseUrl = 'http://localhost:8089/company/company'; 
  
  constructor(private http:HttpClient) { }  
  
  
  getAllCompany(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllCompany');  
  }  
  
  saveCompany(Company: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveCompany', Company);  
  }  
  
  deleteCompany(companyName: String): Observable<any> {  
    return this.http.delete(this.baseUrl+'/deleteCompany/'+companyName);
  
  }  
  
  findOneInAll1(companyName: String): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll1/${companyName}`);  
  }  
  
  updateCompany(companyName: String, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}/updateCompany/${companyName}`, value);  
  }  
    
}  