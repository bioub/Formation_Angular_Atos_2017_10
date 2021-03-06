import { Component } from '@angular/core';

@Component({
  selector: 'hello-root',
  template: `
    <hello-clock></hello-clock>
    <hello-prenom [prenom]="prenom" (prenomChange)="onPrenomChange($event)"></hello-prenom>
    <hello-clock format="HH:mm" [delay]="1000 * 60"></hello-clock>
    {{prenom}}
  `,
  styles: []
})
export class AppComponent {

  public prenom: string;

  public onPrenomChange(prenom) {
    this.prenom = prenom;
  }
}
