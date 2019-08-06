import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { FormsModule } from '@angular/forms';
import {LoginService} from '../login/login.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    @Input() userAccountData:any = { 
        UserAccountID :0
       ,RoleID :0
       ,UserAccountName : ''
       ,ContactNumber :''
       , UserName :''
       , Password:''
       ,CreatedDate :''
       ,CreatedBy :''
       ,LastModifiedDate :''
       ,LastModifiedBy :''
       ,EMailAddress :''
       ,ContactAddress :''
     };
     
    @Input() loginModel: any = {
        UserName: '',
        Password : ''
      };

    constructor(public rest:LoginService, private route: ActivatedRoute,
        private translate: TranslateService,
        public router: Router
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {

    }

    onLoggedin() {

        this.rest.getUserAccount(this.loginModel.UserName,this.loginModel.Password).subscribe((data: {}) => {
            console.log(data);
            this.userAccountData = data;
            localStorage.setItem('UserAccountID',this.userAccountData.UserAccountID);
            localStorage.setItem('UserAccountName',this.userAccountData.UserAccountName);

            if(this.userAccountData.RoleID==1) {
                this.router.navigate(['/layout']);
            } else if(this.userAccountData.RoleID===2) {
            this.router.navigate(['/layout/CashRequestCustomer']);
            }

          });
    }
}
