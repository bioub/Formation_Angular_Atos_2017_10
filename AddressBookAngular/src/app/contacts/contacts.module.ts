import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';

@NgModule({
  imports: [
    ContactsRoutingModule,
    SharedModule,
  ],
  declarations: [ContactsListComponent, ContactsShowComponent, ContactsAddComponent]
})
export class ContactsModule { }
