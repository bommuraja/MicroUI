import { Component, OnInit , Input} from '@angular/core';
import { InterestPercentageService } from '../interest-percentage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-percentage-edit',
  templateUrl: './interest-percentage-edit.component.html',
  styleUrls: ['./interest-percentage-edit.component.scss']
})
export class InterestPercentageEditComponent implements OnInit {

  @Input() interestPercentageData: any = {
    InterestPercentageID : 0
    , UserAccountID : 0
    , InterestPercentage1 : ''
    , CreatedDate : ''
    , CreatedBy : ''
    , LastModifiedDate : ''
    , LastModifiedBy : ''
  };
  constructor(public rest: InterestPercentageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getInterestPercentage(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.interestPercentageData = data;
    });
  }

  updateInterestPercentage() {
    this.rest.updateInterestPercentage(this.interestPercentageData).subscribe((result) => {
      this.router.navigate(['pages/interest-percentage/interest-percentage-list']);
    }, (err) => {
      console.log(err);
    });
    // this.route.snapshot.params['id']
  }

}
