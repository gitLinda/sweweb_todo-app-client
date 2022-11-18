import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor(private todoService: TodoService) { }

  todoName: string = '';
  todoValue: string = '';
  @Input() todoList: Array<Todo> = [];
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
