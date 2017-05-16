import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../todo-item/todo-item';

@Component({
  selector: 'todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css']
})
export class TodoItemDetailComponent implements OnInit {
  abstract;

  public todoItem:TodoItem;

  constructor() {
    this.todoItem = new TodoItem('TODO #1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
    this.todoItem
      .markDone()
    ;
  }

  // TODO: This snippet of code is duplicated with the one in TodoItem component
  toggleDone(todoItem: TodoItem): void {
    if (todoItem.isDone()) {
      todoItem.markUndone();
    } else {
      todoItem.markDone();
    }
  }

  ngOnInit() {
  }

}
