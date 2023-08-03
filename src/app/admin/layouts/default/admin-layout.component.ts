import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  userInfo: any = {};
  drawerOpen: boolean = true;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userInfo = this._userService.getUser();
  }

  logout() {
    this._userService.logoutUser();
  }

}
