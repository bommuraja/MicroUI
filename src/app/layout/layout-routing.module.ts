import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CustomerLayoutComponent} from './customer-layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'cash-request', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'cash-request', loadChildren: './cash-request/cash-request.module#CashRequestModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'user-account', loadChildren: './user-account/user-account.module#UserAccountModule' },
            { path: 'financial-institution', loadChildren: './financial-institution/financial-institution.module#FinancialInstitutionModule' }
        ]
    },
    {
        path: 'CashRequestCustomer',
            component: CustomerLayoutComponent,
            children: [
                { path: '', redirectTo: 'CashRequestCustomer', pathMatch: 'prefix' },
                { path: 'CashRequestCustomer', loadChildren: './cash-request-customer/cash-request-customer.module#CashRequestCustomerModule' }
            ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
