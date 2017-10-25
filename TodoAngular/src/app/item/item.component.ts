import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {

  @Input()
  public todo: string;

  constructor() { }

  ngOnInit() {
  }

}
