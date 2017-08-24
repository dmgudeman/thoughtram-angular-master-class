import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  // styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    this.select(tab);
     this.tabs.push(tab);

  }

  select(tab:TabComponent) {
    
    this.tabs.forEach( tab =>{tab.selected = false});
    tab.show()

  }
}