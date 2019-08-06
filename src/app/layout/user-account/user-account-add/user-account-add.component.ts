import { Component, OnInit , Input} from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-account-add',
  templateUrl: './user-account-add.component.html',
  styleUrls: ['./user-account-add.component.scss']
})
export class UserAccountAddComponent implements OnInit {

 @Input() userAccountData:any = { 
   UserAccountID :0
 , RoleID :0
 , RoleName :''
 , UserRoleList :[]
 , UserAccountName :''
 , ContactNumber :''
 , UserName :''
 , Password: ''
 , CreatedDate : ''
 , CreatedBy : ''
 , LastModifiedDate : ''
 , LastModifiedBy : ''
 , EMailAddress : ''
 , ContactAddress : ''
 , PageType: ''
 , NextAction: ''
};




  constructor(public rest: UserAccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {


    this.rest.getUserAccount(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.userAccountData = data;
      this.userAccountData.PageType = this.route.snapshot.params['pageType'];

      if (this.route.snapshot.params['pageType'] === 'EditPage') {
        this.userAccountData.NextAction = 'Edit';
      }
      if (this.route.snapshot.params['pageType'] === 'AddPage') {
        this.userAccountData.NextAction = 'Add';
      }
      if (this.route.snapshot.params['pageType'] === 'DeletePage') {
        this.userAccountData.NextAction = 'Delete';
      }
      if (this.route.snapshot.params['pageType'] === 'ViewPage') {
        this.userAccountData.NextAction = 'Back';
      }

    });
  }





  addUserAccount() {
    if (this.userAccountData.pageType === 'AddPage') {
    this.rest.addUserAccount(this.userAccountData).subscribe((result) => {
      this.router.navigate(['layout/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });
  }
  if (this.userAccountData.pageType === 'EditPage') {
    this.rest.updateUserAccount(this.userAccountData).subscribe((result) => {
      this.router.navigate(['layout/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });
}
  if (this.userAccountData.pageType === 'ViewPage') {
    this.router.navigate(['layout/user-account/user-account-list']);
    }
    if (this.userAccountData.pageType === 'DeletePage') {
      this.rest.deleteUserAccount(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['layout/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });

    }


  }


}
