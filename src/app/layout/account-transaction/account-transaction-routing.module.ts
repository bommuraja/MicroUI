import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountTransactionComponent } from './account-transaction.component';
import { AccountTransactionListComponent } from './account-transaction-list/account-transaction-list.component';
import { AccountTransactionAddComponent} from './account-transaction-add/account-transaction-add.component';
import {AccountTransactionEditComponent} from './account-transaction-edit/account-transaction-edit.component';
import {AccountTransactionViewComponent} from './account-transaction-view/account-transaction-view.component';
import {AccountTransactionDeleteComponent}from './account-transaction-delete/account-transaction-delete.component';

const routes: Routes = [
  {
      path: '',
      component: AccountTransactionComponent,
      children:[
        { path:'',redirectTo:'account-transaction'},
        { path:'account-transaction-list',component:AccountTransactionListComponent},
        { path:'account-transaction-add',component:AccountTransactionAddComponent},
        { path:'account-transaction-edit/:id',component:AccountTransactionEditComponent},
        { path:'account-transaction-view/:id',component:AccountTransactionViewComponent},
        { path:'account-transaction-delete/:id',component:AccountTransactionDeleteComponent},
        { path:'account-transaction', component: AccountTransactionListComponent}
      ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountTransactionRoutingModule { }