import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../domain/auth/auth.service";
import {UserService} from "../../../domain/user/user.service";
import {DialogsService} from "../../../shared/dialogs.service";
import {DatePipe} from "@angular/common";
import {User} from "../../../domain/user/User";
import {Router} from "@angular/router";
import {AuthViewService} from "../../auth/auth-view.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user: User | null = null;
  menu:string = "address";

  constructor(
    private authService: AuthService,
    private authViewService: AuthViewService,
    private userService: UserService,
    private dialogsService: DialogsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    console.log(this.user)
    if(this.user == null) {
      this.router.navigate(["/auth"])
    }
  }

  onMenuChanged(menu:string) {
    this.menu = menu;
  }

  logout() {
    this.authViewService.logout()
    this.router.navigate(["/products"]);
  }
}
