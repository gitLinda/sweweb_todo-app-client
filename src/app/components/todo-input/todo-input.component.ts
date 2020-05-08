import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../model/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor(private todoService: TodoService) { }

  todoName: string;
  todoValue: string;
  @Input() todoList: Array<Todo>;
  @Output() updateTodoList: EventEmitter<void> = new EventEmitter<void>();

  addTodo() {
    const todo = {name: this.todoName, value: this.todoValue};
    this.todoService.insertTodo(todo)
      .subscribe((response: any) => {
        this.todoName = '';
        this.todoValue = '';
        this.updateTodoList.emit();
    });
  }

}
