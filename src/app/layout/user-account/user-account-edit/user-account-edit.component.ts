import { Component, OnInit, Input } from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-account-edit',
  templateUrl: './user-account-edit.component.html',
  styleUrls: ['./user-account-edit.component.scss']
})
export class UserAccountEditComponent implements OnInit {

  @Input() userAccountData:any = { 
    UserAccountID :0
   ,RoleID :0
   ,RoleName :''
   ,UserRoleList :[]
   ,UserAccountName :''
   ,ContactNumber :''
   ,UserName :''
   ,Password:''
   ,CreatedDate :''
   ,CreatedBy :''
   ,LastModifiedDate :''
   ,LastModifiedBy :''
   ,EMailAddress :''
   ,ContactAddress :''
 };

  constructor(public rest:UserAccountService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit() {
    this.rest.getUserAccount(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.userAccountData = data;
    });  
  }

  updateUserAccount() {
    this.rest.updateUserAccount(this.userAccountData).subscribe((result) => {
      this.router.navigate(['layout/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });
    //this.route.snapshot.params['id']
  }

}
