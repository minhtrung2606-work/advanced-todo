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

  ngOnInit() { }

  onTick(todoItem: TodoItem): void {
    todoItem.toggleDone();
  }

}
