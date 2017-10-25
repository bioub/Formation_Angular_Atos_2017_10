import { Observable } from 'rxjs/Observable';
import { ContactServiceInterface } from './contact-service-interface';
import { Injectable, EventEmitter } from '@angular/core';

import { Contact } from '../../../shared/models/contact';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class FakeContactService implements ContactServiceInterface {
  public events = new EventEmitter<string>();

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

  create$(contact: Contact): Observable<Contact> {
    const nextId = this.contacts[this.contacts.length - 1].id + 1;
    contact.id = nextId;
    this.contacts.push(contact);

    return Observable.of(contact);
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
