import {Component, OnInit} from '@angular/core';
import {checkFormControl} from "../../../utils/checkFormControl";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../../domain/user/user.service";
import {AuthViewService} from "../../auth/auth-view.service";
import {AuthService} from "../../../domain/auth/auth.service";
import {DialogsService} from "../../../shared/dialogs.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  name: FormControl<string | null > = new FormControl('', [Validators.required]);
  message: FormControl<string | null > = new FormControl('',[Validators.required]);
  email: FormControl<string | null > = new FormControl('',[Validators.required, Validators.email]);
  phone: FormControl<string | null > = new FormControl('');

  constructor(
    private authService: AuthService,
    private dialogs: DialogsService
  ) {
  }
  protected readonly checkFormControl = checkFormControl;

  ngOnInit(): void {
    let user = this.authService.getUser()
    this.email.setValue(user?.email || '')
  }

  onSave() {
    if(this.name.valid && this.email.valid && this.email.valid) {
      this.dialogs.openInfoDialog("We will contact you soon")
      this.clearData()
    }else{
      this.dialogs.openInfoDialog("Fill out all required fields")
    }
  }

  private clearData(){
    this.name.setValue("")
    this.email.setValue("")
    this.phone.setValue("")
    this.message.setValue("")
  }
}
