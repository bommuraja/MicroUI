import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashRequestComponent } from './cash-request.component';
import { CashRequestListComponent } from './cash-request-list/cash-request-list.component';
import { CashRequestAddComponent} from './cash-request-add/cash-request-add.component';
import {CashRequestEditComponent} from './cash-request-edit/cash-request-edit.component';
import {CashRequestViewComponent} from './cash-request-view/cash-request-view.component';
import {CashRequestDeleteComponent} from './cash-request-delete/cash-request-delete.component';
import {CashRequestProceedComponent} from './cash-request-proceed/cash-request-proceed.component';
import { CashRequestClientComponent} from './cash-request-client/cash-request-client.component';


const routes: Routes = [
  {
      path: '',
      component: CashRequestComponent,
      children: [
        { path: '', redirectTo: 'cash-request'},
        { path: 'cash-request-list', component: CashRequestListComponent},
        { path: 'cash-request-add', component: CashRequestAddComponent},
        { path: 'cash-request-edit/:id', component: CashRequestEditComponent},
        { path: 'cash-request-view/:id', component: CashRequestViewComponent},
        { path: 'cash-request-delete/:id', component: CashRequestDeleteComponent},
        { path: 'cash-request-proceed/:id', component: CashRequestProceedComponent},
        { path: 'cash-request', component: CashRequestListComponent}
      ]
  }
];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CashRequestRoutingModule { }
