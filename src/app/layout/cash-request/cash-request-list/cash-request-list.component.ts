import { Component, OnInit, ViewChild} from '@angular/core';
import { CashRequestService } from '../cash-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatFormField} from '@angular/material';


@Component({
  selector: 'app-cash-request-list',
  templateUrl: './cash-request-list.component.html',
  styleUrls: ['./cash-request-list.component.scss']
})
export class CashRequestListComponent implements OnInit {

  cashRequestList: CashRequestList[] = [];

  constructor(public rest: CashRequestService, private route: ActivatedRoute, private router: Router) {
    this.cashRequestList = [];
    this.rest.getCashRequests().subscribe((data: {}) => {
      console.log(data);
      this.cashRequestList = data as CashRequestList[];
    });
   }


  ngOnInit() {
  }
  add() {
    this.router.navigate(['layout/cash-request/cash-request-add']);
  }
  delete(id) {
    this.rest.addCashRequest(id)
      .subscribe(res => {
          this.getCashRequests();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCashRequests() {
    this.cashRequestList = [];
    this.rest.getCashRequests().subscribe((data: {}) => {
      console.log(data);
      this.cashRequestList = data as CashRequestList[];

    });
  }

}

export interface CashRequestList {
  CashRequestID: Number;
  UserAccountID: Number;
  CashRequestStatusID : Number;
  PaymentFromBankID: Number;
  PaymentToBankID : Number;
  RequestDate: string;
  ResponseDate: string;
  RequestAmount: string;
  ResponseAmount: string;
  CreatedDate: string;
  CreatedBy: string;
  LastModifiedDate: string;
  LastModifiedBy: string;
}

