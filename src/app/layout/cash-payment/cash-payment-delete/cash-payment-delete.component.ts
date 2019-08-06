import { Component, OnInit , Input} from '@angular/core';
import { CashPaymentService } from '../cash-payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-payment-delete',
  templateUrl: './cash-payment-delete.component.html',
  styleUrls: ['./cash-payment-delete.component.scss']
})
export class CashPaymentDeleteComponent implements OnInit {

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


  constructor(public rest: CashPaymentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCashPayment(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.cashPaymentData = data;
    });
  }

  deleteCashPayment() {
    this.rest.deleteCashPayment(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/cash-payment/cash-payment-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
