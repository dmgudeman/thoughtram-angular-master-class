import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../contacts.service'
import { ActivatedRoute,Router }        from '@angular/router';
import { Contact } from '../models/contact';
import { Subject }        from 'rxjs/Subject';
import { EventBusService }        from '../event-bus.service';

import { HttpClient }        from '@angular/common/http';
// import { TabsComponent }        from '../tabs/tabs.component';
// import { TabComponent }        from '../tabs/tab.component';
import { MdTabsModule}   from '@angular/material';


@Component({
    selector: 'trm-contacts-editor',
    templateUrl: './contacts-editor.component.html',
    styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
     contact: Contact = <Contact>{ address: {}};
     private terms$ = new Subject<string>();
     id: string;


     constructor(
      private contactsService: ContactsService,
      private route: ActivatedRoute,
      private router: Router,
      private eventBusService: EventBusService

  ) { }

  ngOnInit() {
     
      this.id = this.route.snapshot.paramMap.get('id');
      this.contactsService.getContact(this.id).subscribe( contact =>{
     
          this.contact = contact;
          this.eventBusService.emit('appTitleChange', `Editing ${contact.name}`)
      });
  

     
  }

  save(contact: Contact) {
    this.contactsService.updateContact(this.contact).subscribe((data) => {
    this.contact = data;
    console.log('return', this.contact);
    this.router.navigate(['contact', data.id]);
    });
    }
    cancel(contact: Contact) {
    this.router.navigate(['contact', contact.id]);
    }
    
   private goToDetails(contact:Contact) {
     this.router.navigate(['contact', contact.id])
   }
}
