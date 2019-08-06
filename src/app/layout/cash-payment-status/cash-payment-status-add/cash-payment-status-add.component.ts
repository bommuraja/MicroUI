import { Component, OnInit , Input} from '@angular/core';
import { CashPaymentStatusService } from '../cash-payment-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-payment-status-add',
  templateUrl: './cash-payment-status-add.component.html',
  styleUrls: ['./cash-payment-status-add.component.scss']
})
export class CashPaymentStatusAddComponent implements OnInit {

  constructor(public rest: CashPaymentStatusService, private route: ActivatedRoute, private router: Router) { }

  @Input() cashPaymentStatusData: any = {
    CashPaymentStatusID: 0,
    CashPaymentStatusName: '',
    CreatedDate: '',
    CreatedBy: '',
    LastModifiedDate: '',
    LastModifiedBy: ''
  };
  ngOnInit() {
  }

  addCashPaymentStatus() {
    this.rest.addCashPaymentStatus(this.cashPaymentStatusData).subscribe((result) => {
      this.router.navigate(['pages/cash-payment-status/cash-payment-status-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
