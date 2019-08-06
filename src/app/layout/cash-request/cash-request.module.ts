import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CashRequestComponent } from './cash-request.component';
import { CashRequestAddComponent } from './cash-request-add/cash-request-add.component';
import { CashRequestEditComponent } from './cash-request-edit/cash-request-edit.component';
import { CashRequestDeleteComponent } from './cash-request-delete/cash-request-delete.component';
import { CashRequestViewComponent } from './cash-request-view/cash-request-view.component';
import { CashRequestListComponent } from './cash-request-list/cash-request-list.component';
import { CashRequestRoutingModule } from './cash-request-routing.module';
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
import { CashRequestProceedComponent } from './cash-request-proceed/cash-request-proceed.component';
import { CashRequestClientComponent } from './cash-request-client/cash-request-client.component';

@NgModule({
  declarations: [CashRequestComponent, CashRequestAddComponent, CashRequestEditComponent, CashRequestDeleteComponent, CashRequestViewComponent, CashRequestListComponent, CashRequestProceedComponent, CashRequestClientComponent],
  imports: [
    CommonModule,
    CashRequestRoutingModule,
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
export class CashRequestModule { }
