import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../domain/user/user.service";
import {checkFormControl} from "../../../utils/checkFormControl";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-arrival.dialog',
  templateUrl: './arrival.dialog.component.html',
  styleUrls: ['./arrival.dialog.component.scss']
})
export class ArrivalDialogComponent {
  arrivedActionDisabled: boolean = false;
  reason = new FormControl<string>("", [Validators.required])
  constructor(
    private matRef: MatDialogRef<ArrivalDialogComponent>
  ) {

  }
  arrived() {
    this.matRef.close()
  }

  protected readonly checkFormControl = checkFormControl;

}
