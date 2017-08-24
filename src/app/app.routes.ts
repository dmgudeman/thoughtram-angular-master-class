
import { ContactsListComponent }      from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent }   from './contacts-details/contacts-details.component';
import { Routes }                     from '@angular/router';
import { ContactsEditorComponent }    from './contacts-editor/contacts-editor.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component'



// export const APP_ROUTES = [
//   { path: '', component: ContactsListComponent },
//   { path: 'contact/:id', component: ContactsDetailsComponent },
//   { path: 'contact/:id/edit', component: ContactsEditorComponent },
//   { path: '**', redirectTo: '/' },
// ]
export const APP_ROUTES = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactsDetailsComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent }
    ]
  }
]