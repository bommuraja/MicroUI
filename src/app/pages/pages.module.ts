import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [PagesComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    MatTableModule
  ]
})
export class PagesModule { }


