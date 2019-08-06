import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerAddRoutingModule } from './customer-add-routing.module';
import { CustomerAddComponent } from './customer-add.component';

import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerAddRoutingModule,
    PageHeaderModule,
    FormsModule
  ]
})
export class CustomerAddModule { }
