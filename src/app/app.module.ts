import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsService } from './contacts.service'

import { ContactsAppComponent } from './app.component';
import { Contact } from './models/contact'

@NgModule( {
  declarations: [ContactsAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    ContactsService, 
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}