import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hello-prenom',
  template: `
    <div>
      Prénom: <input on-input="changePrenom($event)">
    </div>
    <div>
      Prénom: <input (input)="changePrenom($event)">
    </div>

    <div>
      Prénom (avec ngModel): <input bindon-ngModel="prenom">
    </div>
    <div>
    Prénom (avec ngModel): <input [(ngModel)]="prenom">
  </div>
    <p *ngIf="prenom">
      Hello {{prenom}} !
    </p>
    <ul *ngIf="prenoms.length">
      <li *ngFor="let p of prenoms">{{p}}</li>
    </ul>
  `,
  styles: []
})
export class PrenomComponent {
  public prenom: string = 'Inconnu';
  public prenoms: string[] = ['Inconnu', 'Eric'];

  @Output()
  public onChangePrenom = new EventEmitter<string>();

  public changePrenom(e) {
    this.prenom = e.target.value;
    this.onChangePrenom.emit(this.prenom);
  }
}
