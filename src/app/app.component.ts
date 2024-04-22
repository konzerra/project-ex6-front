import {Component, OnInit} from '@angular/core';
import {AuthService} from "./domain/auth/auth.service";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'template-v2';

  isSideNavCollapsed: boolean = false;
  screenWidth = 0;

  constructor(
    public authService: AuthService
  ) {
  }

  async onToggleSideNav(data: SideNavToggle): Promise<void> {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngOnInit(): void {
    this.authService.onWebOpened()
  }
}
