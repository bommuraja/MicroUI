import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestPercentageComponent } from './interest-percentage.component';
import { InterestPercentageListComponent } from './interest-percentage-list/interest-percentage-list.component';
import { InterestPercentageAddComponent} from './interest-percentage-add/interest-percentage-add.component';
import {InterestPercentageEditComponent} from './interest-percentage-edit/interest-percentage-edit.component';
import {InterestPercentageViewComponent} from './interest-percentage-view/interest-percentage-view.component';
import {InterestPercentageDeleteComponent}from './interest-percentage-delete/interest-percentage-delete.component';


const routes: Routes = [
  {
      path: '',
      component: InterestPercentageComponent,
      children: [
        { path: '', redirectTo: 'interest-percentage'},
        { path: 'interest-percentage-list', component: InterestPercentageListComponent},
        { path: 'interest-percentage-add', component: InterestPercentageAddComponent},
        { path: 'interest-percentage-edit/:id', component: InterestPercentageEditComponent},
        { path: 'interest-percentage-view/:id', component: InterestPercentageViewComponent},
        { path: 'interest-percentage-delete/:id', component: InterestPercentageDeleteComponent},
        { path: 'interest-percentage', component: InterestPercentageListComponent}
      ]
  }
];



  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InterestPercentageRoutingModule { }
