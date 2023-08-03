import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviremonets';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private _router: Router, private _authService: AuthService) { }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  loginUser(payload: any): Observable<any> {
    let url = `${environment.baseUrl}/api/auth/local`;

    return this.http.post<any>(url, payload);
  }

  registerUser(payload: any): Observable<any> {
    let url = `${environment.baseUrl}/api/auth/local/register`;

    return this.http.post<any>(url, payload);
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

}
