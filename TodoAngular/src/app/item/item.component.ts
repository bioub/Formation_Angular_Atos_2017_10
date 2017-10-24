import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public todo: string;

  constructor() { }

  ngOnInit() {
  }

}
