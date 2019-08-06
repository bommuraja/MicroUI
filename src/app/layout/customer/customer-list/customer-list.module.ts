import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerListComponent } from './customer-list.component';

import { PageHeaderModule } from '../../../shared';

@NgModule({
  
  imports: [CommonModule, CustomerListRoutingModule, PageHeaderModule],
    declarations: [CustomerListComponent]
})
export class CustomerListModule { }
