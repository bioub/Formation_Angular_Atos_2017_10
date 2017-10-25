import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos = ['Acheter du lait'];

  public handleNewTodo(todo) {
    this.todos = [todo, ...this.todos];
  }
}
