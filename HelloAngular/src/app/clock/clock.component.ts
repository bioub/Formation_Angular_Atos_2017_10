import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hello-clock',
  template: `
    <span bind-textContent="now | date:format"></span>
    <input bind-value="now | date:format">
    <span [textContent]="now | date:format"></span>
    <input [value]="now | date:format">
    {{now | date:format}}
  `,
  styles: []
})
export class ClockComponent implements OnInit {
  
  public now: Date;

  @Input()
  public format: string = 'HH:mm:ss';

  @Input()
  public delay: number = 1000;

  constructor() { }

  private update() {
    this.now = new Date();
    setTimeout(this.update.bind(this), this.delay);
  }

  ngOnInit(): void {
    this.update();
  }

}
