import { Component, OnInit , Input} from '@angular/core';
import { CashRequestStatusService } from '../cash-request-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cash-request-status-delete',
  templateUrl: './cash-request-status-delete.component.html',
  styleUrls: ['./cash-request-status-delete.component.scss']
})
export class CashRequestStatusDeleteComponent implements OnInit {

  @Input() cashRequestStatusData: any = {
    CashRequestStatusID : 0,
    CashRequestStatusName : '',
    CreatedDate : '',
    CreatedBy : '',
    LastModifiedDate : '',
    LastModifiedBy : ''
  };

   constructor(public rest: CashRequestStatusService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCashRequestStatus(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.cashRequestStatusData = data;
    });
  }

  deleteCashRequestStatus() {
    this.rest.deleteCashRequestStatus(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/cash-request-status/cash-request-status-list']);
    }, (err) => {
      console.log(err);
    });

  }

}
