import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import 'rxjs/add/operator/map';
import { HttpClient }        from '@angular/common/http';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

// interface ContactResponse  { item  : Contact    } 
// interface ContactsResponse { items : Contact[]  } 


@Injectable()
export class ContactsService {
  url: string
  API_ENDPOINT = "http://localhost:4201/api"
  debounceMS;
  
  
  contacts$:  Observable<Array<Contact>>

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return  this.http.get<any>(this.API_ENDPOINT + "/contacts/")
     .map((data) => data.items);
  }

  getContact(id: String){
     let url = this.API_ENDPOINT + "/contacts/" + id
     return this.http.get<any>(url).map((data) => data.item)

  }

  updateContact(contact: Contact){ 
    let url = this.API_ENDPOINT +"/contacts/" + contact.id;
    return this.http.put<any>(url, contact)
    .map(data => data.item)

  }
  // Add a ContactsService::search(term: string)
  search(term:string ){
     let url = this.API_ENDPOINT + "/search?text=" + term;
     return this.http.get<any>(url).map(data => data.items)

  }

  rawSearch(terms$: Observable<string>, debounceMs = 400) : Observable<Array<Contact>>{
       this.contacts$ = terms$.debounceTime(400)
                     .distinctUntilChanged()
                     .switchMap(item => this.search(item))
                    .merge( this.getContacts());


                    return this.contacts;

  }
  
  

  
  }

  }
