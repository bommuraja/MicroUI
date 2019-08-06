import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashPaymentComponent } from './cash-payment.component';
import { CashPaymentListComponent } from './cash-payment-list/cash-payment-list.component';
import { CashPaymentAddComponent} from './cash-payment-add/cash-payment-add.component';
import {CashPaymentEditComponent} from './cash-payment-edit/cash-payment-edit.component';
import {CashPaymentViewComponent} from './cash-payment-view/cash-payment-view.component';
import {CashPaymentDeleteComponent}from './cash-payment-delete/cash-payment-delete.component';


const routes: Routes = [
  {
      path: '',
      component: CashPaymentComponent,
      children: [
        { path: '', redirectTo: 'cash-payment'},
        { path: 'cash-payment-list', component: CashPaymentListComponent},
        { path: 'cash-payment-add', component: CashPaymentAddComponent},
        { path: 'cash-payment-edit/:id', component: CashPaymentEditComponent},
        { path: 'cash-payment-view/:id', component: CashPaymentViewComponent},
        { path: 'cash-payment-delete/:id', component: CashPaymentDeleteComponent},
        { path: 'cash-payment', component: CashPaymentListComponent}
      ]
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CashPaymentRoutingModule { }
