import { Component, OnInit , Input} from '@angular/core';
import { AccountTransactionService } from '../account-transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-transaction-view',
  templateUrl: './account-transaction-view.component.html',
  styleUrls: ['./account-transaction-view.component.scss']
})
export class AccountTransactionViewComponent implements OnInit {

  @Input() accountTransactionData: any = {
    AccountTransactionID : 0
    , UserAccountID : 0
    , TransactionReferenceID : 0
    , TransactionDate : ''
    , TransactionAmount : ''
    , TransactionDescription : ''
    , IsCredit : ''
    , BalanceAmount : ''
    , CreatedDate : ''
    , CreatedBy : ''
    , LastModifiedDate : ''
    , LastModifiedBy : ''
  };

    constructor(public rest: AccountTransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getAccountTransaction(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.accountTransactionData = data;
    });
  }
  navigateToAccountTransactionList() {
    this.router.navigate(['pages/account-transaction/account-transaction-list']);
}

}
