
import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from '../operator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operator-delete',
  templateUrl: './operator-delete.component.html',
  styleUrls: ['./operator-delete.component.scss']
})
export class OperatorDeleteComponent implements OnInit {

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

  deleteOperator() {
    this.rest.deleteOperator(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['pages/operator/operator-list']);
    }, (err) => {
      console.log(err);
    });
    
  }

}
