import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabArray: Array<TabComponent>

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
     this.tabArray.push(tab)

  }

  selectedTabs(tab:TabComponent) {
    
    this.tabArray.forEach(this.selected = false)

  }
}
