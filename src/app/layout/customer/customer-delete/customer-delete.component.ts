import { Component, OnInit, Input } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {

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
  deleteCustomer() {
    this.rest.deleteCustomer(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/customer-list/']);
    }, (err) => {
      console.log(err);
    });
  }

}
