import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ContactsModule,
    AppRoutingModule, // toujours en dernier
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
