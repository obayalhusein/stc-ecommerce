import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isSubmitting: boolean = false;
  formData = {
    identifier: '',
    password: '',
  };
  errorMessage: string = "";

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isSubmitting = true;

    this._authService.loginUser(this.formData).subscribe({
      next: (result) => {
        const { jwt, user } = result;
          this._authService.setToken(jwt);
          this._authService.setUser(user);
          if(user.isAdmin) {
            this._router.navigate(['/admin']);
          }
          else {
            this._router.navigate(['/']);
          }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error.error.message;
        console.log(error);
      },
    });
  }

}
