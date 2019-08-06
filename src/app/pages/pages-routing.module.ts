import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';



const routes: Routes = [
  {
      path: '',
      component: PagesComponent,
      children:[
       
        { path:'',redirectTo:'operator'},
        { path:'operator',loadChildren:'./operator/operator.module#OperatorModule'}

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
