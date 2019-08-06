import { Component, OnInit,ViewChild} from '@angular/core';
import { OperatorService } from '../operator.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource,MatFormField} from '@angular/material';


@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})



export class OperatorListComponent implements OnInit {

  operatorList:operatorBE[] = [];
  constructor(public rest:OperatorService, private route: ActivatedRoute, private router: Router) {    
    this.operatorList = [];
    this.rest.getOperators().subscribe((data: {}) => {
      console.log(data);
      this.operatorList = data as operatorBE[]
    
    });  }


  ngOnInit() {
    this.getOperators();
  }

  add() {
    this.router.navigate(['pages/operator/operator-add']);
  }
  delete(id) {
    this.rest.addOperator(id)
      .subscribe(res => {
          this.getOperators();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getOperators() {
    this.operatorList = [];
    this.rest.getOperators().subscribe((data: {}) => {
      console.log(data);
      this.operatorList = data as operatorBE[]
    
    });
  } 

  

  

}
export interface operatorBE {
  DataEntryOperatorID:Number;
  DataEntryOperatorName:string;
  CreatedDate: string;
  CreatedBy: string;
}



