import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  userInfo: any = {};
  isLoggedIn: boolean = false;
  drawerOpen: boolean = true;
  cartItemCount: number = 3;

  constructor(private _authService: AuthService, private _userService: UserService) { }

  ngOnInit() {
    this.userInfo = this._userService.getUser();
    this.isLoggedIn = this._authService.hasToken();
  }

  logout() {
    this._userService.logoutUser();
  }

}
