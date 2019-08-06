import { Component, OnInit , Input} from '@angular/core';
import { FinancialInstitutionService } from '../financial-institution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-financial-institution-edit',
  templateUrl: './financial-institution-edit.component.html',
  styleUrls: ['./financial-institution-edit.component.scss']
})
export class FinancialInstitutionEditComponent implements OnInit {

  @Input() financialInstitutionData: any = {
    FinancialInstitutionID: 0,
    UserAccountID: 0,
    AccountName: '',
    NickName: '',
    AccountNumber: '',
    InstitutionName: '',
    InstitutionIFSCCode: '',
    InstitutionLocation: '',
    InstitutionCity: '',
    CreatedDate: '',
    CreatedBy: '',
    LastModifiedDate: '',
    LastModifiedBy: '',
  };

  constructor(public rest: FinancialInstitutionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getFinancialInstitution(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.financialInstitutionData = data;
    });
  }

  updateFinancialInstitution() {
    this.rest.updateFinancialInstitution(this.financialInstitutionData).subscribe((result) => {
      this.router.navigate(['pages/financial-institution/financial-institution-list']);
    }, (err) => {
      console.log(err);
    });
    // this.route.snapshot.params['id']
  }

}
