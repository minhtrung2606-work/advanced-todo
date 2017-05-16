import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todoItem:TodoItem;

  constructor() {
    this.todoItem = new TodoItem('TODO #1', 'This is a TODO #1');
    this.todoItem.complete();
  }
}
