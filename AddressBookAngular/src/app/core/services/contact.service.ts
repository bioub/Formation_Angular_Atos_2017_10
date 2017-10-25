import { Observable } from 'rxjs/Observable';
import { Contact } from './../../shared/models/contact';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ContactService {

  private contacts: Contact[] = [{
    id: 1,
    prenom: 'John',
    nom: 'Doe',
  }, {
    id: 2,
    prenom: 'Toto',
    nom: 'Titi',
  }];

  constructor() { }

  public getList$(): Observable<Contact[]> {
    return Observable.of(this.contacts)
              .delay(500);
  }

  public getById$(id: number): Observable<Contact> {
    const contact = this.contacts.find(c => c.id === id);

    if (id === 1) {
      return Observable.of(contact)
        .delay(3000);
    } else {
      return Observable.of(contact)
        .delay(500);
    }
  }
}
