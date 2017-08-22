
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { Routes } from '@angular/router'



export const APP_ROUTES = [
  { path: '', component: ContactsListComponent },
  {path: 'contact/:id', component: ContactsDetailsComponent},
  { path: '**', redirectTo: '/'},
]

