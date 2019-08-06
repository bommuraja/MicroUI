import { Component, OnInit ,Input} from '@angular/core';
import { OperatorService } from '../operator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operator-add',
  templateUrl: './operator-add.component.html',
  styleUrls: ['./operator-add.component.scss']
})
export class OperatorAddComponent implements OnInit {

  constructor(public rest:OperatorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  @Input() operatorData = { 
    DataEntryOperatorID:0
    ,DataEntryOperatorName:''
    ,CreatedDate:''
    ,CreatedBy:''
  };


  

  addOperator() {
    this.rest.addOperator(this.operatorData).subscribe((result) => {
      this.router.navigate(['pages/operator/operator-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
