import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { CheckMarkComponent } from './check-mark/check-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoItemListComponent,
    TodoItemDetailComponent,
    CheckMarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
