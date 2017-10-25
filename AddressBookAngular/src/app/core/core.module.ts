import { ContactService } from './services/contact/contact.service';
import { FakeContactService } from './services/contact/fake-contact.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    NotFoundComponent,
    HomeComponent,
  ],
  providers: [
    // A faire dans les tests
    // { provide: ContactService, useClass: FakeContactService },
    ContactService,
  ],
  exports: [
    NotFoundComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
