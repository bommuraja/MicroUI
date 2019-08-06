import { Component, OnInit, ViewChild} from '@angular/core';
import { AccountTransactionService } from '../account-transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatFormField} from '@angular/material';

@Component({
  selector: 'app-account-transaction-list',
  templateUrl: './account-transaction-list.component.html',
  styleUrls: ['./account-transaction-list.component.scss']
})
export class AccountTransactionListComponent implements OnInit {

  accountTransactionList: AccountTransactionList[] = [];
  constructor(public rest: AccountTransactionService, private route: ActivatedRoute, private router: Router) {
    this.accountTransactionList = [];
    this.rest.getAccountTransactions().subscribe((data: {}) => {
      console.log(data);
      this.accountTransactionList = data as AccountTransactionList[];
    });
   }
  ngOnInit() {
    // this.getInterestPercentages();
  }
  add() {
    this.router.navigate(['pages/account-transaction/account-transaction-add']);
  }
  delete(id) {
    this.rest.addAccountTransaction(id)
      .subscribe(res => {
          this.getAccountTransactions();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getAccountTransactions() {
    this.accountTransactionList = [];
    this.rest.getAccountTransactions().subscribe((data: {}) => {
      console.log(data);
      this.accountTransactionList = data as AccountTransactionList[];

    });
  }


}

export interface AccountTransactionList {

  AccountTransactionID: Number;
  UserAccountID: Number;
  TransactionReferenceID: Number;
  TransactionDate: string;
  TransactionAmount: string;
  TransactionDescription: string;
  IsCredit: boolean;
  BalanceAmount: string;
  CreatedDate: string;
  CreatedBy: string;
  LastModifiedDate: string;
  LastModifiedBy: string;
}
