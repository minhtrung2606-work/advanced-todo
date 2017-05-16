import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './../todo-item/todo-item';

@Component({
  selector: 'todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css']
})
export class TodoItemDetailComponent implements OnInit {
  abstract;

  @Input()
  public todoItem:TodoItem;

  constructor() { }

  ngOnInit() {
  }

  showDetail():Boolean {
    return !!this.todoItem;
  }

}
