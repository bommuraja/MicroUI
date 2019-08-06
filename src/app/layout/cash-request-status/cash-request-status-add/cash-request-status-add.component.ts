import { Component, OnInit , Input} from '@angular/core';
import { CashRequestStatusService } from '../cash-request-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-request-status-add',
  templateUrl: './cash-request-status-add.component.html',
  styleUrls: ['./cash-request-status-add.component.scss']
})
export class CashRequestStatusAddComponent implements OnInit {

  constructor(public rest: CashRequestStatusService, private route: ActivatedRoute, private router: Router) { }
  @Input() cashRequestStatusData: any = {
    CashRequestStatusID : 0,
    CashRequestStatusName : '',
    CreatedDate : '',
    CreatedBy : '',
    LastModifiedDate : '',
    LastModifiedBy : ''
  };
  ngOnInit() {
  }
  addCashRequestStatus() {
    this.rest.addCashRequestStatus(this.cashRequestStatusData).subscribe((result) => {
      this.router.navigate(['pages/cash-request-status/cash-request-status-list']);
    }, (err) => {
      console.log(err);
    });
  }
}
