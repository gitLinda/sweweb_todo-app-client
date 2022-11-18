import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private todoService: TodoService) { }

  todoList: Array<Todo> = [];

  ngOnInit(): void {
    this.getTodoList();
  }

  updateTodoList(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodos()
      .subscribe((data: Array<Todo>) => {
        this.todoList = data;
      });
  }
}
