import { Component, OnInit, Input } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  @Input() customerData:any = { 
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
  
  constructor(public rest:CustomerDataService, private route: ActivatedRoute, private router: Router){

   }

  ngOnInit() {
    this.rest.getCustomer(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.customerData = data;
    });    
  }
  redirectToCustomerList() {
      this.router.navigate(['pages/customer-list/']);  
  }

}
