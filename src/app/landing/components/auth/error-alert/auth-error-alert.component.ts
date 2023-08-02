import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'auth-error-alert',
  templateUrl: './auth-error-alert.component.html',
  styleUrls: ['./auth-error-alert.component.scss']
})
export class AuthErrorAlertComponent implements OnInit {
  @Input() message: string = "";

  constructor() { }

  ngOnInit() {
  }

}
