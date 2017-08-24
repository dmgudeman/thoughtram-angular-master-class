import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact:Contact;
  id: string;
  constructor(
    private router:Router,
    private contactsService: ContactsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contactsService.getContact(this.id).subscribe(
      (data )=>this.contact = data);
  }
  navigateToEditor() {
    this.router.navigate(['contact/'+ this.id + '/edit'])
  }


  navigateToList() {
    this.router.navigate(['']);
  }
}
// navigateToEditor and navigateToList methods which use the router#navigate(dsl) 
// API to route to different Components; note that these are methods of the ContactsDetailViewComponent class.