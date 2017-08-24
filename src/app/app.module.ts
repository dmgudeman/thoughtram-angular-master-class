import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FormsModule }              from '@angular/forms';
import { NgModule }                 from '@angular/core';
import { MaterialModule }           from '@angular/material';
import { FlexLayoutModule }         from '@angular/flex-layout';
import { RouterModule }             from '@angular/router';
import { HttpClientModule }         from '@angular/common/http';

import { APP_ROUTES }               from './app.routes';
import { ContactsAppComponent }     from './app.component';
import { Contact }                  from './models/contact';
import { ContactsListComponent }    from './contacts-list/contacts-list.component';
import { ContactsService }          from './contacts.service';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsEditorComponent }  from './contacts-editor/contacts-editor.component';
import { EventBusService }          from './event-bus.service';
import { ProvidersComponent }       from './providers/providers.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
// import { TabsComponent }           from  './tabs/tabs.component';
// import { TabComponent }            from './tabs/tab.component';

@NgModule( {
  declarations: [
    ContactsAppComponent, 
    ContactsDetailsComponent, 
    ContactsEditorComponent, 
    ContactsListComponent, 
    ProvidersComponent, ContactsDashboardComponent, AboutComponent, 
    // TabsComponent,
    // TabComponent,
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
    EventBusService,
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}