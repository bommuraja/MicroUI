import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor() {}


    collapedSideBar: boolean;

    ngOnInit() {}

    

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }


}
