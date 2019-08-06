import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorComponent } from './operator.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorAddComponent} from './operator-add/operator-add.component';
import {OperatorEditComponent} from './operator-edit/operator-edit.component';
import {OperatorViewComponent} from './operator-view/operator-view.component';
import {OperatorDeleteComponent}from './operator-delete/operator-delete.component';


  const routes: Routes = [
    {
        path: '',
        component: OperatorComponent
    }
  ];
  
  

const routes1: Routes = [
  {
      path: '',
      component: OperatorComponent,
      children:[
        { path:'',redirectTo:'operator'},
        { path:'operator-list',component:OperatorListComponent},
        { path:'operator-add',component:OperatorAddComponent},
        { path:'operator-edit/:id',component:OperatorEditComponent},
        { path:'operator-view/:id',component:OperatorViewComponent},
        { path:'operator-delete/:id',component:OperatorDeleteComponent},
        { path:'operator', component: OperatorListComponent}
      ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes1)],
    exports: [RouterModule]
})

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OperatorRoutingModule { }