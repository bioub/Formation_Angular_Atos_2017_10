import { Contact } from './../../shared/models/contact';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactHttpService {

  constructor(
    private http: HttpClient,
  ) { }

  public getList$(): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      `${environment.apiServer}/contacts`,
    );
  }

  public create$(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      `${environment.apiServer}/contacts`,
      contact,
    );
  }

  public getById$(id: number): Observable<Contact> {
    return this.http.get<Contact>(
      `${environment.apiServer}/contacts/${id}`,
    );
  }
}
