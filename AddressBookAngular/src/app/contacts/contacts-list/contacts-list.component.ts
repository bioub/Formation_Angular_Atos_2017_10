import { ContactService } from './../../core/services/contact.service';
import { Contact } from './../../shared/models/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title.setTitle(data.title);
    });

    this.contactService.getList$().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
