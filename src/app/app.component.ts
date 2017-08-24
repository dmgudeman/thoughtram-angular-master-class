import { Component } from '@angular/core';

import { ContactsService } from './contacts.service';
import { EventBusService }        from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [ContactsService]
})

export class ContactsAppComponent {
  title: string;
    
  constructor (private eventBusService: EventBusService) {
  
  }

  ngOnInit() {
    this.eventBusService.observe('appTitleChange').subscribe(title => this.title = title);

    
    
  }


}  