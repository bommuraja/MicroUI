import { Component, OnInit , Input} from '@angular/core';
import { CashPaymentService } from '../cash-payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-payment-view',
  templateUrl: './cash-payment-view.component.html',
  styleUrls: ['./cash-payment-view.component.scss']
})
export class CashPaymentViewComponent implements OnInit {

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

  navigateToCashRequestList() {
    this.router.navigate(['pages/cash-payment/cash-payment-list']);
  }

}
