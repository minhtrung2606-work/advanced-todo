import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './../todo-item/todo-item';

@Component({
  selector: 'todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {
  abstract;

  @Input()
  public todoItemList:Array<TodoItem>;

  constructor() { }

  ngOnInit() {
    if (!this.todoItemList) {
      this.todoItemList = [];
    }
  }

  isEmptyList():Boolean {
    return this.todoItemList && this.todoItemList.length === 0;
  }

}
