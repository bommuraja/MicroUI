import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class CustomerComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

}
