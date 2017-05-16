import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  abstract;

  @HostBinding('attr.class') cssClass = 'todo-item-wrapper';

  @Input()
  public todoItem:TodoItem;

  @Output()
  public onDone:EventEmitter<TodoItem>;

  constructor() {
    this.onDone = new EventEmitter();
  }

  ngOnInit() { }

}
