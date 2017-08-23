import { Component, OnInit } from '@angular/core';
import {APP_CONFIG} from '../app-config';
import { CONTACT_DI_CONFIG } from '../app-config';

@Component({
  selector: 'trm-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
  providers: [{ provide: APP_CONFIG, useValue: CONTACT_DI_CONFIG }]
})
export class ProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
