import { Component, OnInit , Input} from '@angular/core';
import { FinancialInstitutionService } from '../financial-institution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-financial-institution-view',
  templateUrl: './financial-institution-view.component.html',
  styleUrls: ['./financial-institution-view.component.scss']
})
export class FinancialInstitutionViewComponent implements OnInit {

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

  navigateToFinancialInstitutionList() {
    this.router.navigate(['pages/financial-institution/financial-institution-list']);
}

}
