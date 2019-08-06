
import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from '../operator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operator-view',
  templateUrl: './operator-view.component.html',
  styleUrls: ['./operator-view.component.scss']
})
export class OperatorViewComponent implements OnInit {

  @Input() operatorData:any = { 
    DataEntryOperatorID:0
    ,DataEntryOperatorName:''
    ,CreatedDate:''
    ,CreatedBy:''
  };

  constructor(public rest:OperatorService, private route: ActivatedRoute, private router: Router){

   }

  ngOnInit() {
    this.rest.getOperator(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.operatorData = data;
    });  
  }

  navigateToOperatorList() {
      this.router.navigate(['pages/operator/operator-list']);
}
}