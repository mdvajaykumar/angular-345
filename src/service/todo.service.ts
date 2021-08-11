import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Todo } from "src/modal/todo";

@Injectable()
export class TodoService{
    constructor(private httpClient:HttpClient){

    }
    getAllTodo():Observable<Todo>{
     return this.httpClient.get<Todo>('http://localhost:3000/posts');
    }
    getTodoById(id: number){

    }
}