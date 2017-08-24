import { Component, OnInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  // styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabArray: Array<TabComponent> =[]

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    this.select(tab);
     this.tabArray.push(tab);

  }

  select(tab:TabComponent) {
    
    this.tabArray.forEach( tab =>{tab.selected = false});
    tab.show()

  }
}