import { Contact } from './../../shared/models/contact';
import { ContactService } from './../../core/services/contact/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {
  public contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this.route.params
      .map(params => Number(params.id))
      .switchMap((id: number) => this.contactService.getById$(id))
      .subscribe(contact => {
        this.contact = contact;
      });
  }

}
