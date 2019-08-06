import { Component, OnInit, Input } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(public rest:CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  @Input() customerData = { 
    CustomerID:0
    , CustomerName: ''
    , ContactNumber:'' 
    , MailAddress:'' 
    , AddressLine1:'' 
    , AddressLine2:'' 
    , UserName:'' 
    , Password:'' 
    , CreatedDate:'' 
    , CreatedBy:'' 
    , LastModifiedDate:'' 
    , LastModifiedBy:'' 
  };


  

  addCustomer() {
    this.rest.addCustomer(this.customerData).subscribe((result) => {
      this.router.navigate(['pages/customer-list']);
    }, (err) => {
      console.log(err);
    });
  }
}
