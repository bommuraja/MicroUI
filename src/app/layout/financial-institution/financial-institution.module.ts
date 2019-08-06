import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FinancialInstitutionComponent } from './financial-institution.component';
import { FinancialInstitutionAddComponent } from './financial-institution-add/financial-institution-add.component';
import { FinancialInstitutionEditComponent } from './financial-institution-edit/financial-institution-edit.component';
import { FinancialInstitutionDeleteComponent } from './financial-institution-delete/financial-institution-delete.component';
import { FinancialInstitutionViewComponent } from './financial-institution-view/financial-institution-view.component';
import { FinancialInstitutionListComponent } from './financial-institution-list/financial-institution-list.component';
import { FinancialInstitutionRoutingModule } from './financial-institution-routing.module';
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
  declarations: [FinancialInstitutionComponent, FinancialInstitutionAddComponent, FinancialInstitutionEditComponent, FinancialInstitutionDeleteComponent, FinancialInstitutionViewComponent, FinancialInstitutionListComponent],
  imports: [
    CommonModule,
    FinancialInstitutionRoutingModule,
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
export class FinancialInstitutionModule { }
