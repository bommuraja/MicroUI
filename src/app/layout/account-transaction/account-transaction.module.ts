import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountTransactionComponent } from './account-transaction.component';
import { AccountTransactionAddComponent } from './account-transaction-add/account-transaction-add.component';
import { AccountTransactionEditComponent } from './account-transaction-edit/account-transaction-edit.component';
import { AccountTransactionDeleteComponent } from './account-transaction-delete/account-transaction-delete.component';
import { AccountTransactionViewComponent } from './account-transaction-view/account-transaction-view.component';
import { AccountTransactionListComponent } from './account-transaction-list/account-transaction-list.component';
import { AccountTransactionRoutingModule } from './account-transaction-routing.module';
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
  declarations: [AccountTransactionComponent, AccountTransactionAddComponent, AccountTransactionEditComponent, AccountTransactionDeleteComponent, AccountTransactionViewComponent, AccountTransactionListComponent],
  imports: [
    CommonModule,
    AccountTransactionRoutingModule,
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
export class AccountTransactionModule { }
