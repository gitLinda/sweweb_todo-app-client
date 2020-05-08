import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';

  public getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.baseUrl + '/todos');
  }

  public insertTodo(todo: Todo): Observable<any> {
    return this.http.post(this.baseUrl + '/todo', todo);
  }

  public deleteTodo(todo: Todo): Observable<any> {
    const url = this.baseUrl + '/todo/' + todo._id;
    return this.http.delete(url);
  }
}
