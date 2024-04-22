import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../domain/auth/auth.service";
import {UserService} from "../../../domain/user/user.service";
import {DialogsService} from "../../../shared/dialogs.service";
import {DatePipe} from "@angular/common";
import {User} from "../../../domain/user/User";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user: User | null = null;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private dialogsService: DialogsService,
    private datePipe: DatePipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    console.log("user: "+this.user)
    if(this.user == null) {
      this.router.navigate(["/auth"])
    }

  }

  logout() {
    this.authService.logout()
  }
}
