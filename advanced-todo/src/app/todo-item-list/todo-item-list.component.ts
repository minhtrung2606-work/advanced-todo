import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../todo-item/todo-item';

@Component({
  selector: 'todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {
  abstract;

  private currentTodoItem:TodoItem;

  @Input()
  public todoItemList:Array<TodoItem>;

  @Output()
  public onDone:EventEmitter<TodoItem>;

  constructor() {
    this.onDone = new EventEmitter();
  }

  ngOnInit() {
    if (!this.todoItemList) {
      this.todoItemList = [];
    }
  }

  isEmptyList():Boolean {
    return this.todoItemList && this.todoItemList.length === 0;
  }

  onTodoItemDone(todoItem:TodoItem): void {
    if (todoItem) {
      this.onDone.emit(todoItem);
    }
  }

  isTheLastItem(index:Number):Boolean {
    return index === this.todoItemList.length - 1;
  }

  isSelected(todoItem:TodoItem): Boolean {
    return this.currentTodoItem && this.currentTodoItem.equals(todoItem);
  }

  onTodoItemClick(todoItem):void {
    this.currentTodoItem = todoItem;
  }

}
