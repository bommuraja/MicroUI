import { Component, OnInit , Input} from '@angular/core';
import { CashRequestCustomerService } from './cash-request-customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CashRequestService} from '../cash-request/cash-request.service';

@Component({
  selector: 'app-cash-request-customer',
  templateUrl: './cash-request-customer.component.html',
  styleUrls: ['./cash-request-customer.component.scss']
})
export class CashRequestCustomerComponent implements OnInit {

  @Input() cashRequestData: any = {
    CashRequestID : 0,
    UserAccountID : 0,
    CashRequestStatusID :0,
    CashRequestStatusName:'',
    PaymentFromBankID:0,
    PaymentToBankID :0,
    RequestDate : '',
    ResponseDate : '',
    RequestAmount : '',
    ResponseAmount : '',
    CreatedDate : '',
    CreatedBy : '',
    IsActive : 0,
    LastModifiedDate : '',
    LastModifiedBy : '',
    UserActionOnCashRequest:''
  };

  constructor(public rest: CashRequestCustomerService, public restCashRequest: CashRequestService,private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {    
    var UserAccountID = JSON.parse(localStorage.getItem('UserAccountID') || '0')
    this.restCashRequest.getCashRequestByUserID(UserAccountID).subscribe((data: {}) => {
      console.log(data);
      this.cashRequestData = data;
      this.cashRequestData.UserAccountName = localStorage.getItem('UserAccountName');
    });
  }
  cashRequestCustomer(UserActionOnCashRequest) {
    this.cashRequestData.UserActionOnCashRequest=UserActionOnCashRequest;
    this.rest.addCashRequest(this.cashRequestData).subscribe((result) => {
      this.cashRequestData = result;
      this.cashRequestData.UserAccountName = localStorage.getItem('UserAccountName');
    }, (err) => {
      console.log(err);
    });
    this.ngOnInit();
  }
}
