import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service'
import { Contact } from '../models/contact';

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
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(id).subscribe(
      (data )=>{
         this.contact = data
      }
    )
  }

}
