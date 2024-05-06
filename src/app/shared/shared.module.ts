import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {AngularMaterialModule} from "../angular.material/angular.material.module";
import {DialogsService} from "./dialogs.service";
import { ConfirmDialogComponent } from './dialogs/confirm.dialog/confirm.dialog.component';
import { InfoDialogComponent } from './dialogs/info.dialog/info.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete.dialog/delete.dialog.component';
import { GenericDialogComponent } from './dialogs/generic-dialog/generic-dialog.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommentDialogComponent } from './dialogs/comment.dialog/comment.dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    InfoDialogComponent,
    DeleteDialogComponent,
    GenericDialogComponent,
    CommentDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DialogsService
  ],
  exports:[
    ConfirmDialogComponent,
    InfoDialogComponent,
    DeleteDialogComponent
  ],
})
export class SharedModule { }
