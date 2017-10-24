import { Component } from '@angular/core';

@Component({
  selector: 'hello-root',
  template: `
    <hello-clock></hello-clock>
    <hello-prenom (onChangePrenom)="prenomHandler($event)"></hello-prenom>
    <hello-clock format="HH:mm" [delay]="1000 * 60"></hello-clock>
  `,
  styles: []
})
export class AppComponent {

  public prenomHandler(prenom) {
    console.log(prenom);
  }
}
