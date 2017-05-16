import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  abstract;

  @Input()
  public todoItem:TodoItem;

  constructor() {}

  ngOnInit() {
    if (!this.todoItem) {
      this.todoItem = new TodoItem('TODO #1', 'This is a TODO #1');
    } else {
      console.log('<todo-item>: TODO item already passed in');
    }
  }

}
