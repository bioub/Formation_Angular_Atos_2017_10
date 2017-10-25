import { Contact } from './../../shared/models/contact';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public contact: Contact = {
    prenom: '',
    nom: '',
  };

  constructor(route: ActivatedRoute) {
    route.data.subscribe((data) => {
      console.log('AddComponent', data);
    });
  }

  ngOnInit() {
  }

  public addContact() {
    console.log('submit');
  }
}
