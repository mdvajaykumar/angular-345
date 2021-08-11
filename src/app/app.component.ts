import { Component, Injectable } from '@angular/core';
import { Todo } from 'src/modal/todo';
import { TodoService } from 'src/service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  providers:[
    TodoService
  ]
})
export class AppComponent {
  todos:Todo[];
  constructor(private todoService:TodoService){
   
  }
}
