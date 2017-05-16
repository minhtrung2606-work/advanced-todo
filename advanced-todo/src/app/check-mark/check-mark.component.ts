import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'check-mark',
  templateUrl: './check-mark.component.html',
  styleUrls: ['./check-mark.component.css']
})
export class CheckMarkComponent implements OnInit {
  abstract;

  @Input()
  public checked:Boolean;

  constructor() { }

  ngOnInit() {
  }

}
