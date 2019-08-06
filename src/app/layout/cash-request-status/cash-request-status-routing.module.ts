import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashRequestStatusComponent } from './cash-request-status.component';
import { CashRequestStatusListComponent } from './cash-request-status-list/cash-request-status-list.component';
import { CashRequestStatusAddComponent} from './cash-request-status-add/cash-request-status-add.component';
import {CashRequestStatusEditComponent} from './cash-request-status-edit/cash-request-status-edit.component';
import {CashRequestStatusViewComponent} from './cash-request-status-view/cash-request-status-view.component';
import {CashRequestStatusDeleteComponent}from './cash-request-status-delete/cash-request-status-delete.component';

const routes: Routes = [
  {
      path: '',
      component: CashRequestStatusComponent,
      children:[
        { path:'',redirectTo:'cash-request-status'},
        { path:'cash-request-status-list',component:CashRequestStatusListComponent},
        { path:'cash-request-status-add',component:CashRequestStatusAddComponent},
        { path:'cash-request-status-edit/:id',component:CashRequestStatusEditComponent},
        { path:'cash-request-status-view/:id',component:CashRequestStatusViewComponent},
        { path:'cash-request-status-delete/:id',component:CashRequestStatusDeleteComponent},
        { path:'cash-request-status', component: CashRequestStatusListComponent}
      ]
  }
];
 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CashRequestStatusRoutingModule { }