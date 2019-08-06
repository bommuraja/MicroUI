import { Component, OnInit, ViewChild} from '@angular/core';
import { FinancialInstitutionService } from '../financial-institution.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatFormField} from '@angular/material';

@Component({
  selector: 'app-financial-institution-list',
  templateUrl: './financial-institution-list.component.html',
  styleUrls: ['./financial-institution-list.component.scss']
})
export class FinancialInstitutionListComponent implements OnInit {

  financialInstitutionList: FinancialInstitutionList[] = [];
  constructor(public rest: FinancialInstitutionService, private route: ActivatedRoute, private router: Router) {

    this.financialInstitutionList = [];
    this.rest.getFinancialInstitutions().subscribe((data: {}) => {
      console.log(data);
      this.financialInstitutionList = data as FinancialInstitutionList[];
    });


   }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['layout/financial-institution/financial-institution-add']);
  }
  delete(id) {
    this.rest.addFinancialInstitution(id)
      .subscribe(res => {
          this.getFinancialInstitutions();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getFinancialInstitutions() {
    this.financialInstitutionList = [];
    this.rest.getFinancialInstitutions().subscribe((data: {}) => {
      console.log(data);
      this.financialInstitutionList = data as FinancialInstitutionList[];

    });
  }
}

export interface FinancialInstitutionList {
  FinancialInstitutionID: Number;
  UserAccountID: Number;
  AccountName: string;
  NickName: string;
  AccountNumber: string;
  InstitutionName: string;
  InstitutionIFSCCode: string;
  InstitutionLocation: string;
  InstitutionCity: string;
  CreatedDate: string;
  CreatedBy: string;
  LastModifiedDate: string;
  LastModifiedBy: string;
}

