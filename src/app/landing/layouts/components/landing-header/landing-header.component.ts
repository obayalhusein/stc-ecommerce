import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this._authService.getUser();
    this.isLoggedIn = this._authService.isLoggedIn();
  }

  logout() {
    this._authService.logoutUser();
  }

}
