import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashRequestCustomerComponent } from './cash-request-customer.component';

const routes: Routes = [
  {
      path: '',
      component: CashRequestCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CashRequestCustomerRoutingModule { }
