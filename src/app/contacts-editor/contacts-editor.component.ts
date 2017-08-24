import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../contacts.service'
import { ActivatedRoute,Router }        from '@angular/router';
import { Contact } from '../models/contact';

import { HttpClient }        from '@angular/common/http';


@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};
  
  constructor(
   private contactsService: ContactsService,
   private route: ActivatedRoute,
   private router: Router

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
   
      this.contactsService.getContact(id).subscribe( data =>{
        return this.contact = data;
      })
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
