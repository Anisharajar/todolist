import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.viewTodos().subscribe(
      (reponse)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
 data:any=[]

}
