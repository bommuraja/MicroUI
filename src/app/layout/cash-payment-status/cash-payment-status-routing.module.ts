import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashPaymentStatusComponent } from './cash-payment-status.component';
import { CashPaymentStatusListComponent } from './cash-payment-status-list/cash-payment-status-list.component';
import { CashPaymentStatusAddComponent} from './cash-payment-status-add/cash-payment-status-add.component';
import {CashPaymentStatusEditComponent} from './cash-payment-status-edit/cash-payment-status-edit.component';
import {CashPaymentStatusViewComponent} from './cash-payment-status-view/cash-payment-status-view.component';
import {CashPaymentStatusDeleteComponent}from './cash-payment-status-delete/cash-payment-status-delete.component';

const routes: Routes = [
  {
      path: '',
      component: CashPaymentStatusComponent,
      children:[
        { path:'',redirectTo:'cash-payment-status'},
        { path:'cash-payment-status-list',component:CashPaymentStatusListComponent},
        { path:'cash-payment-status-add',component:CashPaymentStatusAddComponent},
        { path:'cash-payment-status-edit/:id',component:CashPaymentStatusEditComponent},
        { path:'cash-payment-status-view/:id',component:CashPaymentStatusViewComponent},
        { path:'cash-payment-status-delete/:id',component:CashPaymentStatusDeleteComponent},
        { path:'cash-payment-status', component: CashPaymentStatusListComponent}
      ]
  }
];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CashPaymentStatusRoutingModule { }