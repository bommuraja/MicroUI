import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerEditRoutingModule } from './customer-edit-routing.module';

import { CustomerEditComponent } from './customer-edit.component';

import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerEditRoutingModule,
    FormsModule,
    PageHeaderModule
  ]
})
export class CustomerEditModule { }
