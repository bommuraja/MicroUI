import { Component, OnInit } from '@angular/core';
import { CashPaymentStatusService } from '../cash-payment-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatFormField} from '@angular/material';

@Component({
  selector: 'app-cash-payment-status-list',
  templateUrl: './cash-payment-status-list.component.html',
  styleUrls: ['./cash-payment-status-list.component.scss']
})
export class CashPaymentStatusListComponent implements OnInit {

  CashPaymentStatusList: CashPaymentStatusListData[] = [];

  constructor(public rest: CashPaymentStatusService, private route: ActivatedRoute, private router: Router) {
    this.CashPaymentStatusList = [];
    this.rest.getCashPaymentStatuses().subscribe((data: {}) => {
      console.log(data);
      this.CashPaymentStatusList = data as CashPaymentStatusListData[];
    });
   }


   ngOnInit() {
  }

  add() {
    this.router.navigate(['pages/cash-payment-status/cash-payment-status-add']);
  }
  delete(id) {
    this.rest.addCashPaymentStatus(id)
      .subscribe(res => {
          this.getCashPaymentses();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCashPaymentses() {
    this.CashPaymentStatusList = [];
    this.rest.getCashPaymentStatuses().subscribe((data: {}) => {
      console.log(data);
      this.CashPaymentStatusList = data as CashPaymentStatusListData[];
    });
  }

}

export interface CashPaymentStatusListData {
  CashPaymentStatusID: Number;
  CashPaymentStatusName: string;
  PaymentAmount: string;
  CreatedDate: string;
  CreatedBy: string;
  LastModifiedDate: string;
  LastModifiedBy: string;
}
