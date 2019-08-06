import { Component, OnInit , Input} from '@angular/core';
import { CashRequestService } from '../cash-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-request-add',
  templateUrl: './cash-request-add.component.html',
  styleUrls: ['./cash-request-add.component.scss']
})
export class CashRequestAddComponent implements OnInit {

  constructor(public rest: CashRequestService, private route: ActivatedRoute, private router: Router) { }
  @Input() cashRequestData: any = {
    CashRequestID : 0,
    UserAccountID : 0,
    CashRequestStatusID :0,
    PaymentFromBankID:0,
    PaymentToBankID :0,
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
  }
  addCashRequest() {
    this.rest.addCashRequest(this.cashRequestData).subscribe((result) => {
      this.router.navigate(['layout/cash-request/cash-request-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
