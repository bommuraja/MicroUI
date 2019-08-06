import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDeleteComponent} from './customer-delete.component';

const routes: Routes = [
  {
    path: '', component: CustomerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDeleteRoutingModule { }
