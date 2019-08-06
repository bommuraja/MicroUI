import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { InterestPercentageRoutingModule } from './interest-percentage-routing.module';
import { InterestPercentageComponent } from './interest-percentage.component';
import { InterestPercentageAddComponent } from './interest-percentage-add/interest-percentage-add.component';
import { InterestPercentageEditComponent } from './interest-percentage-edit/interest-percentage-edit.component';
import { InterestPercentageDeleteComponent } from './interest-percentage-delete/interest-percentage-delete.component';
import { InterestPercentageViewComponent } from './interest-percentage-view/interest-percentage-view.component';
import { InterestPercentageListComponent } from './interest-percentage-list/interest-percentage-list.component';
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
  declarations: [InterestPercentageComponent, InterestPercentageAddComponent, InterestPercentageEditComponent, InterestPercentageDeleteComponent, InterestPercentageViewComponent, InterestPercentageListComponent],
  imports: [
    CommonModule,
    InterestPercentageRoutingModule,
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
export class InterestPercentageModule { }
