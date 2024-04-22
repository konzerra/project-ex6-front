import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {SublevelMenuComponent} from "../ui/sidenav/sublevel-menu.component";
import {SidenavComponent} from "../ui/sidenav/sidenav.component";
import {BodyComponent} from "../ui/body/body.component";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
