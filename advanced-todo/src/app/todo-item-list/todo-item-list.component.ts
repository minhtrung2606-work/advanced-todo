import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {
  abstract;

  constructor() { }

  ngOnInit() {
  }

}
