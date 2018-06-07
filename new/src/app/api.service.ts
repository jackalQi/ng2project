import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
//  API_URL = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }
  getUsers(str : string){
    return  this.httpClient.get(str);
  }
}
