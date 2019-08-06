import { Component, OnInit , Input} from '@angular/core';
import { CashPaymentStatusService } from '../cash-payment-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-payment-status-edit',
  templateUrl: './cash-payment-status-edit.component.html',
  styleUrls: ['./cash-payment-status-edit.component.scss']
})
export class CashPaymentStatusEditComponent implements OnInit {

  @Input() cashPaymentStatusData: any = {
    CashPaymentStatusID: 0,
    CashPaymentStatusName: '',
    CreatedDate: '',
    CreatedBy: '',
    LastModifiedDate: '',
    LastModifiedBy: ''
  };


  constructor(public rest: CashPaymentStatusService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCashPaymentStatus(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.cashPaymentStatusData = data;
    });
  }

    updateCashPaymentStatus() {
      this.rest.updateCashPaymentStatus(this.cashPaymentStatusData).subscribe((result) => {
        this.router.navigate(['pages/cash-payment-status/cash-payment-status-list']);
      }, (err) => {
        console.log(err);
      });
      // this.route.snapshot.params['id']
    }

}
