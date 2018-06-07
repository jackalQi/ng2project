import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-api-comp',
  templateUrl: './api-comp.component.html',
  styleUrls: ['./api-comp.component.css'],
  providers: [ ApiService ],
})

export class ApiCompComponent implements OnInit {
  private users: Array<object> = [];

  constructor( private apiService: ApiService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  myurl = "https://fathomless-meadow-11124.herokuapp.com/user";

  public getUsers(){
    console.log("getUser is loaded From" + this.myurl);
    this.apiService.getUsers(this.myurl).subscribe(
      (data:Array<object>)=>{
        this.users = data;
        console.log(data);
      }
    );
  }
}
