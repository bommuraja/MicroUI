import { Component, OnInit , Input} from '@angular/core';
import { CashRequestService } from '../cash-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-request-proceed',
  templateUrl: './cash-request-proceed.component.html',
  styleUrls: ['./cash-request-proceed.component.scss']
})
export class CashRequestProceedComponent implements OnInit {

  constructor(public rest: CashRequestService, private route: ActivatedRoute, private router: Router) { }
  @Input() cashRequestData: any = {
    CashRequestID : 0,
    UserAccountID : 0,
    UserAccountName : '',
    CashRequestStatusID : 0,
    CashRequestStatusName : 0,
    CashRequestStatusList: [],
    PaymentFromBankID: 0,
    PaymentFromBankName: '',
    PaymentFromBankList: [],
    PaymentToBankID : 0,
    PaymentToBankName : '',
    PaymentToBankList : [],
    RequestDate : '',
    ResponseDate : '',
    RequestAmount : '',
    ResponseAmount : '',
    CreatedDate : '',
    CreatedBy : '',
    LastModifiedDate : '',
    LastModifiedBy : ''
  };

  ngOnInit() {
    this.rest.getCashRequest(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.cashRequestData = data;
    });
  }

    proceedCashRequest() {
      this.rest.updateCashRequest(this.cashRequestData).subscribe((result) => {
        this.router.navigate(['layout/cash-request/cash-request-list']);
      }, (err) => {
        console.log(err);
      });
      // this.route.snapshot.params['id']
    }

}
