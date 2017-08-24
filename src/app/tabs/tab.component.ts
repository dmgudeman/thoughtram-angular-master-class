import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent }        from './tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  // styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() selected = false;
  @Input() title = '';

  constructor(
    private tabComponent:TabsComponent,
  ) { }

  ngOnInit() {
     this.tabComponent.addTab(this)

  }
  show(isVisible=true){
    this.selected = isVisible;
  }
}
