import { Component, OnInit , Input} from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-account-view',
  templateUrl: './user-account-view.component.html',
  styleUrls: ['./user-account-view.component.scss']
})
export class UserAccountViewComponent implements OnInit {

  @Input() userAccountData:any = { 
    UserAccountID :0
   ,RoleID :0
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
   ,PageType:''
   ,NextAction:''
 };

  constructor(public rest:UserAccountService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit() {
    
    this.rest.getUserAccount(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.userAccountData = data;
      this.userAccountData.PageType=this.route.snapshot.params['pageType'];
      if(this.route.snapshot.params['pageType']=='ViewPage'){
        this.userAccountData.NextAction='Back';
      }
      if(this.route.snapshot.params['pageType']=='DeletePage'){
        this.userAccountData.NextAction='Delete';
      }
    });  
  }
  navigateToUserAccountList(pageType) {
    if(pageType =='ViewPage'){
    this.router.navigate(['layout/user-account/user-account-list']);
    }
    else if(pageType =='DeletePage'){ 
      this.rest.deleteUserAccount(this.route.snapshot.params['id']).subscribe((result) => {
      this.router.navigate(['layout/user-account/user-account-list']);
    }, (err) => {
      console.log(err);
    });

    }
}

}
