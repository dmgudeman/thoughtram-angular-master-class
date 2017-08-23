import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import 'rxjs/add/operator/map';
import { HttpClient }        from '@angular/common/http';

// interface ContactResponse  { item  : Contact    } 
// interface ContactsResponse { items : Contact[]  } 


@Injectable()
export class ContactsService {
  url: string
  API_ENDPOINT = "http://localhost:4201/api/contacts"
  
  contacts: Array <Contact>

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return  this.http.get<any>(this.API_ENDPOINT)
     .map((data) => data.items);
  }

  getContact(id: String){
     this.url = this.API_ENDPOINT + "/" + id
     return this.http.get<any>(this.url).map((data) => data.item)

  }
}
