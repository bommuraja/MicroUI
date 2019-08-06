import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerDeleteRoutingModule } from './customer-delete-routing.module';

import { CustomerDeleteComponent } from './customer-delete.component';

import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [CustomerDeleteComponent],
  imports: [
    CommonModule,
    CustomerDeleteRoutingModule,
    FormsModule,
    PageHeaderModule
  ]
})
export class CustomerDeleteModule { }
