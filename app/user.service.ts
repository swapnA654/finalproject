import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {
  
  
  private baseUrl = 'http://localhost:8089/user/userPortal';
  
  constructor(private http:HttpClient) { }  
  
  getAllUsers(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllUsers');  
  }  
  
  saveUser(User: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveUser', User);  
  }  
  
  deleteUser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`, { responseType: 'text' });  
  }  
  
  findOneInAll6(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll6/${id}`);  
  }  
  
  updateUser(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateUser/${id}`, value);  
  }  

  findByUserNameAndPassword(userName: String, password: String): Observable<User> {  
    return this.http.get<User>(this.baseUrl+'/findByUserNameAndPassword/'+userName+'/'+password);  
  }  

  uploadFile( file: File , id : number ) : Observable<any>  
  {  
    let url = this.baseUrl + "uploadImage/" + id ;  
  
    const formdata: FormData = new FormData();  
    
    formdata.append('file', file);  
   
    return this.http.post(url , formdata);  
  }    
}  