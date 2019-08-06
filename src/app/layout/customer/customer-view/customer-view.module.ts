import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerViewRoutingModule } from './customer-view-routing.module';


import { CustomerViewComponent } from './customer-view.component';

import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [CustomerViewComponent],
  imports: [
    CommonModule,
    CustomerViewRoutingModule,
    PageHeaderModule,
    FormsModule
  ]
})
export class CustomerViewModule { }
