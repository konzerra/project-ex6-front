import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTreeModule} from "@angular/material/tree";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule, MatNavList} from "@angular/material/list";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatBadgeModule} from "@angular/material/badge";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  exports:[
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatExpansionModule,
  ],

  providers:[

  ]
})
export class AngularMaterialModule { }
