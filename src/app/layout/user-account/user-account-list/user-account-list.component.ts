import { Component, OnInit, ViewChild} from '@angular/core';
import { UserAccountService } from '../user-account.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-account-list',
  templateUrl: './user-account-list.component.html',
  styleUrls: ['./user-account-list.component.scss']
})
export class UserAccountListComponent implements OnInit {

  UserAccountList: UserAccountData[] = [];
  // Total no of rows from database ( no impact on pager)
  totalNoOfRecords: number;
  currentPage = 1;
  // No of rows in grid
  itemsPerPage: number;
  // nth page
  uptoPreviousPageTotalRecord: number;
  // Starting record of nth page
  strRecordOfnthPage: number;
  // End record of nth page
  endRecordOfnthPage: number;
  // NoOfRecords in current page
  noOfRecordsinCurrentPage: number;

public onPageChange(pageNum: number): void {
   this.uptoPreviousPageTotalRecord = this.itemsPerPage * (pageNum - 1);
    this.noOfRecordsinCurrentPage = (this.totalNoOfRecords - this.uptoPreviousPageTotalRecord);



 if (this.noOfRecordsinCurrentPage <= (this.itemsPerPage)) {
  this.strRecordOfnthPage =  this.uptoPreviousPageTotalRecord + 1;
  this.endRecordOfnthPage =  this.totalNoOfRecords ;
 } else {
  this.strRecordOfnthPage =  this.uptoPreviousPageTotalRecord + 1;
  this.endRecordOfnthPage = (pageNum) * this.itemsPerPage;
 }

}
public changePagesize(num: number, currentPage: number): void {

  this.strRecordOfnthPage = 1;
  if ( (currentPage * this.itemsPerPage) >= this.totalNoOfRecords ) {
    this.endRecordOfnthPage = this.totalNoOfRecords;
  } else {
  this.endRecordOfnthPage = (currentPage * this.itemsPerPage);
  }

}
  constructor(public rest: UserAccountService, private route: ActivatedRoute, private router: Router) {
    this.UserAccountList = [];
    // No of rows in grid
    this.itemsPerPage = 1;
    this.uptoPreviousPageTotalRecord = 0;
    this.strRecordOfnthPage = 1;
    this.endRecordOfnthPage = (this.strRecordOfnthPage + this.itemsPerPage) - 1;
    this.getUserAccounts();
  }

  ngOnInit() {
    this.getUserAccounts();
  }

  add() {
    
    this.router.navigate(['/layout/user-account/user-account-add/0/AddPage']);
  }
  delete(id) {
    this.rest.addUserAccount(id)
      .subscribe(res => {
          this.getUserAccounts();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getUserAccounts() {
    this.UserAccountList = [];
    this.totalNoOfRecords = 0;
    this.rest.getUserAccounts().subscribe((data: {}) => {
        
      var dataList = data as UserAccountData[];
      this.UserAccountList=[];
      for(var i=0;i<dataList.length;i++)
      {
        this.UserAccountList.push(
          {
            "UserAccountID":dataList[i].UserAccountID,
            "UserAccountName": dataList[i].UserAccountName,
            "ContactNumber": dataList[i].ContactNumber
          });
 

      }

      this.totalNoOfRecords = this.UserAccountList.length;

    });
  }

   // sorting
   key = 'name';
   reverse = false;
   sort(key) {
     this.key = key;
     this.reverse = !this.reverse;
   }
   p = 1;

}
export interface UserAccountData {

  UserAccountID: Number;
  // RoleID: Number;
  // RoleName: string;
  // UserRoleList: Array<any>;
  UserAccountName: string;
  ContactNumber: string;
  // UserName: string;
  // Password: string;
  // CreatedDate: string;
  // CreatedBy: string;
  // LastModifiedDate: string;
  // LastModifiedBy: string;
  // EMailAddress: string;
  // ContactAddress: string;
}
