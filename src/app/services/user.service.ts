import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private readonly baseUrl: string = "https://localhost:7188/api/Account/"
constructor(private httpClient: HttpClient) { }
  
//   public login(email: string, password: string){
//      const body = {
//         Email: email,
//         Password: password
//      }

//      return this.httpClient.post(this.baseUrl + "Login", body);
//   }

  public register(fullName: string, email: string, password: string){
    const body = {
       FullName: fullName,
       Email: email,
       Password: password
    }

    return this.httpClient.post(this.baseUrl + "RegisterUser", body);
 }

}
