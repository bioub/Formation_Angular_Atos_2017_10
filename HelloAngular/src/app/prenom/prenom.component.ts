import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

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
      Prénom: <input (input)="changePrenomValue(inputPrenom.value)" #inputPrenom>
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
  
  public prenoms: string[] = ['Inconnu', 'Eric'];

  @Input()
  public prenom: string = 'Inconnu';
  @Output()
  public prenomChange = new EventEmitter<string>();

  public changePrenom(e) {
    this.prenom = e.target.value;
    this.prenomChange.emit(this.prenom);
  }

  public changePrenomValue(prenom) {
    this.prenom = prenom;
    this.prenomChange.emit(this.prenom);
  }
}
