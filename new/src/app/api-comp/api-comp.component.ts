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
  public getUsers(){
    console.log("getUser is loaded");
    this.apiService.getUsers().subscribe(
      (data:Array<object>)=>{
        this.users = data.Items;
        console.log(data);
      }
    )
  }
}
