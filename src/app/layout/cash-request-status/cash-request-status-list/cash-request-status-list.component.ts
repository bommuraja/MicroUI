import { Component, OnInit, ViewChild} from '@angular/core';
import { CashRequestStatusService } from '../cash-request-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatFormField} from '@angular/material';


@Component({
  selector: 'app-cash-request-status-list',
  templateUrl: './cash-request-status-list.component.html',
  styleUrls: ['./cash-request-status-list.component.scss']
})
export class CashRequestStatusListComponent implements OnInit {

  cashRequestStatusList: CashRequestStatusList[] = [];

  constructor(public rest: CashRequestStatusService, private route: ActivatedRoute, private router: Router) {
    this.cashRequestStatusList = [];
    this.rest.getCashRequestStatuses().subscribe((data: {}) => {
      console.log(data);
      this.cashRequestStatusList = data as CashRequestStatusList[];
    });
   }

  ngOnInit() {
  }
  add() {
    this.router.navigate(['pages/cash-request-status/cash-request-status-add']);
  }
  delete(id) {
    this.rest.addCashRequestStatus(id)
      .subscribe(res => {
          this.getCashRequestStatuses();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCashRequestStatuses() {
    this.cashRequestStatusList = [];
    this.rest.getCashRequestStatuses().subscribe((data: {}) => {
      console.log(data);
      this.cashRequestStatusList = data as CashRequestStatusList[];

    });
  }

}

export interface CashRequestStatusList {
  CashRequestStatusID : Number;
  CashRequestStatusName: string;
  CreatedDate : string;
  CreatedBy : string;
  LastModifiedDate : string;
  LastModifiedBy : string;
}

