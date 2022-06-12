import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private readonly baseUrl: string = "https://localhost:7188/api/User"
constructor(private httpClient: HttpClient) { }
  
  public login(email: string, password: string){
     const body = {
        Email: email,
        Password: password
     }  
     return this.httpClient.post(this.baseUrl + "Login", body);
  }

  register(data: any){
    // const body = {
    //    FullName: fullName,
    //    Email: email,
    //    Password: password
    // }

    return this.httpClient.post(this.baseUrl + '/RegisterUser', data);
 }

 getAllUsers(){
   return this.httpClient.get<any>(this.baseUrl + "/GetAllUser");
 }

}
 