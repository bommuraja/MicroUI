import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CashPaymentStatusComponent } from './cash-payment-status.component';
import { CashPaymentStatusAddComponent } from './cash-payment-status-add/cash-payment-status-add.component';
import { CashPaymentStatusEditComponent } from './cash-payment-status-edit/cash-payment-status-edit.component';
import { CashPaymentStatusDeleteComponent } from './cash-payment-status-delete/cash-payment-status-delete.component';
import { CashPaymentStatusViewComponent } from './cash-payment-status-view/cash-payment-status-view.component';
import { CashPaymentStatusListComponent } from './cash-payment-status-list/cash-payment-status-list.component';
import { CashPaymentStatusRoutingModule } from './cash-payment-status-routing.module';
import { FormsModule } from '@angular/forms';

import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  declarations: [CashPaymentStatusComponent, CashPaymentStatusAddComponent, CashPaymentStatusEditComponent, CashPaymentStatusDeleteComponent, CashPaymentStatusViewComponent, CashPaymentStatusListComponent],
  imports: [
    CommonModule,
    CashPaymentStatusRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ]
})
export class CashPaymentStatusModule { }
