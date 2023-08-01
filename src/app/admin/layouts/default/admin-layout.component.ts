import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  userInfo: any = {};
  drawerOpen: boolean = true;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this._authService.getUser();
  }

  logout() {
    this._authService.logoutUser();
  }

}
