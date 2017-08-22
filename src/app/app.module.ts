import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsService } from './contacts.service';
import { RouterModule } from '@angular/router'

import { ContactsAppComponent } from './app.component';
import { Contact } from './models/contact';
import { ContactsListComponent } from './contacts-list/contacts-list.component'
import { APP_ROUTES } from './app.routes'

@NgModule( {
  declarations: [ContactsAppComponent, ContactsListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ContactsService, 
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}