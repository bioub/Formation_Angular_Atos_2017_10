import { ContactHttpService } from './services/contact-http.service';
import { ContactService } from './services/contact.service';
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
    { provide: ContactService, useClass: ContactHttpService },
    // ContactService,
  ],
  exports: [
    NotFoundComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
