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
import { ProvidersComponent }       from './providers/providers.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { FormsModule }             from '@angular/forms';
import { TabsComponent }           from  './tabs/tabs.component';
import { TabComponent }            from './tabs/tab.component'

@NgModule( {
  declarations: [
    ContactsAppComponent, 
    ContactsListComponent, 
    ContactsDetailsComponent, 
    ProvidersComponent, 
    ContactsEditorComponent, 
    TabsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ContactsService, 
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}