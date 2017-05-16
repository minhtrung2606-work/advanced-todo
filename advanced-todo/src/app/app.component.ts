import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todoItemList:Array<TodoItem>;

  constructor() {
    this.todoItemList = [];

    let todoItem = new TodoItem('TODO #1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
    this.todoItemList.push(todoItem);

    todoItem = new TodoItem('TODO #2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
    this.todoItemList.push(todoItem);
  }

  onTodoItemDone(todoItem:TodoItem): void {
    if (todoItem.isDone()) {
      window.alert(todoItem.getTitle() + ' completely done');
    } else {
      window.alert('Oops. Something wrong with TODO task ' + todoItem.getTitle() + ' to be undone');
    }
  }
}
