import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers:any = [];
  constructor(public rest:CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  add() {
    this.router.navigate(['pages/customer-add']);
  }
  delete(id) {
    this.rest.deleteCustomer(id)
      .subscribe(res => {
          this.getCustomers();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getCustomers() {
    this.customers = [];
    this.rest.getCustomers().subscribe((data: {}) => {
      console.log(data);
      this.customers = data;
    });
  }

}
