import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialInstitutionComponent } from './financial-institution.component';
import { FinancialInstitutionListComponent } from './financial-institution-list/financial-institution-list.component';
import { FinancialInstitutionAddComponent} from './financial-institution-add/financial-institution-add.component';
import {FinancialInstitutionEditComponent} from './financial-institution-edit/financial-institution-edit.component';
import {FinancialInstitutionViewComponent} from './financial-institution-view/financial-institution-view.component';
import {FinancialInstitutionDeleteComponent} from './financial-institution-delete/financial-institution-delete.component';

const routes: Routes = [
  {
      path: '',
      component: FinancialInstitutionComponent,
      children: [
        { path: '', redirectTo: 'financial-institution'},
        { path: 'financial-institution-list', component: FinancialInstitutionListComponent},
        { path: 'financial-institution-add', component: FinancialInstitutionAddComponent},
        { path: 'financial-institution-edit/:id', component: FinancialInstitutionEditComponent},
        { path: 'financial-institution-view/:id', component: FinancialInstitutionViewComponent},
        { path: 'financial-institution-delete/:id', component: FinancialInstitutionDeleteComponent},
        { path: 'financial-institution', component: FinancialInstitutionListComponent}
      ]
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FinancialInstitutionRoutingModule { }
