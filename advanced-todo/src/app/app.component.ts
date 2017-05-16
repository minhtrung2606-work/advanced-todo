import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  onTickTodoItem(todoItem: TodoItem): void {
    todoItem.toggleDone();
  }
}
