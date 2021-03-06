import { Observable } from 'rxjs/Observable';
import { Contact } from '../../../shared/models/contact';
import { EventEmitter } from '@angular/core';

export interface ContactServiceInterface {
  events: EventEmitter<string>;
  getList$(): Observable<Contact[]>;
  create$(contact: Contact): Observable<Contact>;
  getById$(id: number): Observable<Contact>;
}
