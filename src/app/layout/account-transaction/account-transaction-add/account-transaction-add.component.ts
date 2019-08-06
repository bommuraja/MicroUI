import { Component, OnInit , Input} from '@angular/core';
import { AccountTransactionService } from '../account-transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-transaction-add',
  templateUrl: './account-transaction-add.component.html',
  styleUrls: ['./account-transaction-add.component.scss']
})
export class AccountTransactionAddComponent implements OnInit {

  constructor(public rest: AccountTransactionService, private route: ActivatedRoute, private router: Router) { }

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

  ngOnInit() {
  }

  addAccountTransaction() {
    this.rest.addAccountTransaction(this.accountTransactionData).subscribe((result) => {
      this.router.navigate(['pages/account-transaction/account-transaction-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
