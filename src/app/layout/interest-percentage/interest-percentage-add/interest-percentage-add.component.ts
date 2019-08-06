import { Component, OnInit ,Input} from '@angular/core';
import { InterestPercentageService } from '../interest-percentage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-percentage-add',
  templateUrl: './interest-percentage-add.component.html',
  styleUrls: ['./interest-percentage-add.component.scss']
})
export class InterestPercentageAddComponent implements OnInit {

  constructor(public rest:InterestPercentageService, private route: ActivatedRoute, private router: Router) { }

  @Input() interestPercentageData : any= { 
    InterestPercentageID :0
    ,UserAccountID :0
    , InterestPercentage1 :''
    , CreatedDate : ''
    , CreatedBy : ''
    , LastModifiedDate : ''
    , LastModifiedBy : ''
  };

  ngOnInit() {
  }
  
  addInterestPercentage() {
    this.rest.addInterestPercentage(this.interestPercentageData).subscribe((result) => {
      this.router.navigate(['pages/interest-percentage/interest-percentage-list']);
    }, (err) => {
      console.log(err);
    });
  }


}
