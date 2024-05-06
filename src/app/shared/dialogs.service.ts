import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./dialogs/confirm.dialog/confirm.dialog.component";
import {InfoDialogComponent} from "./dialogs/info.dialog/info.dialog.component";
import {DeleteDialogComponent} from "./dialogs/delete.dialog/delete.dialog.component";
import {GenericDialogComponent} from "./dialogs/generic-dialog/generic-dialog.component";
import {CommentDialogComponent} from "./dialogs/comment.dialog/comment.dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(
    private dialog : MatDialog
  ) { }

  openComment(){
    return this.dialog.open(CommentDialogComponent, {
      disableClose: true,
    })
  }

  openConfirmDialog(){
    return this.dialog.open(ConfirmDialogComponent,{
      disableClose:false,
    })
  }

  openDeleteDialog(){
    return this.dialog.open(DeleteDialogComponent,{
      disableClose: false
    })
  }
  openInfoDialog(message:string){
    return this.dialog.open(InfoDialogComponent,{
      disableClose:false,
      data:{
        message:message
      }
    })
  }

  openGenericDialog(message: string){
    return this.dialog.open(GenericDialogComponent, {
      disableClose: true,
      data:{
        message: message
      }
    })
  }
}
