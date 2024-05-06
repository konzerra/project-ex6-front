import {Component, OnInit} from '@angular/core';
import {checkFormControl} from "../../../utils/checkFormControl";
import {FormControl, Validators} from "@angular/forms";
import {UserViewService} from "../user.view.service";
import {DialogsService} from "../../../shared/dialogs.service";

@Component({
  selector: 'app-user-address',
  templateUrl: './user.address.component.html',
  styleUrls: ['./user.address.component.scss']
})
export class UserAddressComponent implements OnInit {

  protected readonly checkFormControl = checkFormControl;

  country:FormControl<string | null> = new FormControl("", [Validators.required]);
  city:FormControl<string | null> = new FormControl("", [Validators.required]);
  postalCode:FormControl<string | null> = new FormControl("", [Validators.required]);
  fullAddress:FormControl<string | null> = new FormControl("", [Validators.required]);

  constructor(
    private userViewService:  UserViewService,
    private dialogsService : DialogsService
  ) {
  }
  ngOnInit(): void {
    let address = this.userViewService.getAddress()
    this.country.setValue(address.country)
    this.city.setValue(address.city)
    this.postalCode.setValue(address.postalCode)
    this.fullAddress.setValue(address.fullAddress)
  }
  save() {
    this.userViewService.saveAddress({
      country:this.country.value,
      city:this.city.value,
      postalCode:this.postalCode.value,
      fullAddress:this.fullAddress.value,
    })
    this.dialogsService.openInfoDialog("Address saved")
  }


}
