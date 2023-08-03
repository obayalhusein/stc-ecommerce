import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  isSubmitting: boolean = false;
  formData = {
    username: '',
    email: '',
    password: '',
  };
  errorMessage: string = "";

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isSubmitting = true;

    this._userService.registerUser(this.formData).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error.error.message;
        console.log(error)
      },
    });
  }

}
