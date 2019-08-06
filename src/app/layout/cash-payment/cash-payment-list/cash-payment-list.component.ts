import { Component, OnInit } from '@angular/core';
import { CashPaymentService } from '../cash-payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource,MatFormField} from '@angular/material';

@Component({
  selector: 'app-cash-payment-list',
  templateUrl: './cash-payment-list.component.html',
  styleUrls: ['./cash-payment-list.component.scss']
})
export class CashPaymentListComponent implements OnInit {

  CashPaymentList:CashPaymentListData[] = [];

  constructor(public rest:CashPaymentService, private route: ActivatedRoute, private router: Router) {    
    this.CashPaymentList = [];
    this.rest.getCashPayments().subscribe((data: {}) => {
      console.log(data);
      this.CashPaymentList = data as CashPaymentListData[];
    });
   }

   ngOnInit() {
  }

  add() {
    this.router.navigate(['pages/cash-payment/cash-payment-add']);
  }
  delete(id) {
    this.rest.addCashPayment(id)
      .subscribe(res => {
          this.getCashPayments();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCashPayments() {
    this.CashPaymentList = [];
    this.rest.getCashPayments().subscribe((data: {}) => {
      console.log(data);
      this.CashPaymentList = data as CashPaymentListData[];
    
    });
  } 

}

export interface CashPaymentListData {
  CashPaymentID :Number;
  UserAccountID :Number;
  PaymentDate : string;
  PaymentAmount : string;
  CreatedDate : string;
  CreatedBy : string;
  LastModifiedDate : string;
  LastModifiedBy : string;
}
