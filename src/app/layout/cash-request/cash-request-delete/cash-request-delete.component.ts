import { Component, OnInit , Input} from '@angular/core';
import { CashRequestService } from '../cash-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-request-delete',
  templateUrl: './cash-request-delete.component.html',
  styleUrls: ['./cash-request-delete.component.scss']
})
export class CashRequestDeleteComponent implements OnInit {

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

  constructor(public rest: CashRequestService, private route: ActivatedRoute, private router: Router) { }
 

  ngOnInit() {
    this.rest.getCashRequest(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.cashRequestData = data;
    });
  }

  deleteCashRequest() {
    this.rest.deleteCashRequest(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['layout/cash-request/cash-request-list']);
    }, (err) => {
      console.log(err);
    });

  }

}
