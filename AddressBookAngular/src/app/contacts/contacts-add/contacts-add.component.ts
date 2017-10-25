import { ContactService } from './../../core/services/contact/contact.service';
import { Contact } from './../../shared/models/contact';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
  }

  public addContact() {
    this.contactService.create$(this.contact)
      .subscribe((contact: Contact) => {
        this.router.navigate(['contacts', contact.id]);
        this.contactService.events.emit('contact.write');
      });
  }
}
