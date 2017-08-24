import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service'
import { Contact } from '../models/contact';
import { EventBusService }         from '../event-bus.service';

@Component({
  selector: 'trm-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  contact: Contact
  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private eventBusService: EventBusService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(id).subscribe(
      (data)=>{
         this.contact = data
         this.eventBusService.emit('appTitleChange', `Details of ${this.contact.name}`)
      }
    )
  }

}
