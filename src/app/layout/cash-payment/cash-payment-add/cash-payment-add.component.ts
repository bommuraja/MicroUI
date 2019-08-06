import { Component, OnInit , Input} from '@angular/core';
import { CashPaymentService } from '../cash-payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cash-payment-add',
  templateUrl: './cash-payment-add.component.html',
  styleUrls: ['./cash-payment-add.component.scss']
})
export class CashPaymentAddComponent implements OnInit {

  constructor(public rest: CashPaymentService, private route: ActivatedRoute, private router: Router) { }
  @Input() cashPaymentData: any = {
    CashPaymentID : 0,
    UserAccountID : 0,
    PaymentDate : '',
    PaymentAmount : '',
    CreatedDate : '',
    CreatedBy : '',
    LastModifiedDate : '',
    LastModifiedBy : ''
    };

  ngOnInit() {
  }
  addCashPayment() {
    this.rest.addCashPayment(this.cashPaymentData).subscribe((result) => {
      this.router.navigate(['pages/cash-payment/cash-payment-list']);
    }, (err) => {
      console.log(err);
    });
  }
}
