import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()
  public onAddTodo = new EventEmitter<string>();
  public todo: string;

  constructor() { }

  ngOnInit() {
  }

  public addTodo() {
    this.onAddTodo.emit(this.todo);
  }

}
