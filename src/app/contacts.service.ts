import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact'

@Injectable()
export class ContactsService {
  
  contacts: Array <Contact>

  constructor() { }

  getContacts() {
     return CONTACT_DATA
  }


  getContact(id: String){
     this.contacts =this.getContacts()

   return this.contacts.find(contact => contact.id.toString() === id);
  }
}
