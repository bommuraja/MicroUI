import { Component, OnInit , Input} from '@angular/core';
import { FinancialInstitutionService } from '../financial-institution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-financial-institution-add',
  templateUrl: './financial-institution-add.component.html',
  styleUrls: ['./financial-institution-add.component.scss']
})
export class FinancialInstitutionAddComponent implements OnInit {

  constructor(public rest: FinancialInstitutionService, private route: ActivatedRoute, private router: Router) { }

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
  ngOnInit() {
  }

  addFinancialInstitution() {
    this.rest.addFinancialInstitution(this.financialInstitutionData).subscribe((result) => {
      this.router.navigate(['pages/financial-institution/financial-institution-list']);
    }, (err) => {
      console.log(err);
    });
  }
}
