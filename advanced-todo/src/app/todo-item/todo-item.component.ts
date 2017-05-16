import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  constructor() {
  }

  ngOnInit() { }

  toggleDone(todoItem: TodoItem): void {
    todoItem.toggleDone();
  }

}
