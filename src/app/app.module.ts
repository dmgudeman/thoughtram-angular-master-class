import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { MaterialModule }          from '@angular/material';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { ContactsService }         from './contacts.service';
import { RouterModule }            from '@angular/router';
import { HttpClientModule }              from '@angular/common/http';

import { ContactsAppComponent }    from './app.component';
import { Contact }                 from './models/contact';
import { ContactsListComponent }   from './contacts-list/contacts-list.component'
import { APP_ROUTES }              from './app.routes';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ProvidersComponent } from './providers/providers.component'

@NgModule( {
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailsComponent, ProvidersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
  ],
  providers: [
    ContactsService, 
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}