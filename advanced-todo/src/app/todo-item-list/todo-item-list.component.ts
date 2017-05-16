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

      let todoItem = new TodoItem('TODO #1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
      this.todoItemList.push(todoItem);
    } else {
      console.log('<todo-item-list>: TODO item list already passed in');
    }
  }

  onTick(todoItem: TodoItem): void {
    todoItem.toggleDone();
  }

}
