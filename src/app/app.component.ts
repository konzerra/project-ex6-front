import {Component, OnInit} from '@angular/core';
import {AuthService} from "./domain/auth/auth.service";
import {CartViewService} from "./ui/checkout/cart.view.service";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-v2';


  isSideNavCollapsed: boolean = false;
  screenWidth = 0;

  constructor(
    public authService: AuthService,
    public cartService: CartViewService
  ) {
  }
}
