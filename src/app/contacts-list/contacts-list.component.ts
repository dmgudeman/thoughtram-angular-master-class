import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable }        from 'rxjs/Observable';
import { Subject }        from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

// contacts$: Observable<Array<Contact>>
private terms$ = new Subject<string>();
   contacts$: Observable<any>;
  constructor(
     private contactsService: ContactsService
  ){}

  // search(e) {
  //   this.contacts$ = this.contactsService.search(e)
  // }
  ngOnInit() {
    
    // this.contacts = this.contactsService.getContacts();
    
  //  this.contacts$ = this.terms$.debounceTime(400)
  //   .distinctUntilChanged()
  //   .switchMap(item => this.contactsService.search(item))
  //   .merge( this.contactsService.getContacts());
  }
}
