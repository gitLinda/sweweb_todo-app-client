import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoService) { }

  @Input() todoList: Array<Todo> = [];
  @Output() updateTodoList: EventEmitter<void> = new EventEmitter<void>();

  deleteTodo(index: number): void {
    this.todoService.deleteTodo(this.todoList[index])
      .subscribe((response: any) => {
        this.updateTodoList.emit();
      });
  }

}
