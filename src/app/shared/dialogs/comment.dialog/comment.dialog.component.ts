import { Component } from '@angular/core';
import {checkFormControl} from "../../../utils/checkFormControl";
import {FormControl} from "@angular/forms";
import {RatingStar, Star} from "./RatingStars";


@Component({
  selector: 'app-comment.dialog',
  templateUrl: './comment.dialog.component.html',
  styleUrls: ['./comment.dialog.component.scss']
})
export class CommentDialogComponent {

  ratingStar = new RatingStar();
  protected readonly checkFormControl = checkFormControl;
  comment:FormControl<string | null> = new FormControl<string | null>('')


  rate(index: number) {
    this.ratingStar.clicked(index)
  }
}
