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

  @Output()
  public onDone:EventEmitter<TodoItem>;

  constructor() {
    this.onDone = new EventEmitter();
  }

  ngOnInit() { }

  toggleDone(todoItem: TodoItem): void {
    if (todoItem.isDone()) {
      todoItem.markUndone();
    } else {
      todoItem.markDone();
    }
    this.onDone.emit(todoItem);
  }

}
