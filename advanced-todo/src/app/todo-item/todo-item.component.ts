import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  abstract;

  constructor() { }

  ngOnInit() {
  }

}
