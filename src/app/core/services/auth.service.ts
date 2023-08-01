import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviremonets';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    const tokenJson = localStorage.getItem('token');
    return tokenJson ? JSON.parse(tokenJson) : null;
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  isLoggedIn() {
    const userJson = localStorage.getItem('user');
    return Boolean(userJson);
  }

  checkCurrentUser(): Observable<any> {
    const token = this.getToken();
    if (token) {
      const headers = { Authorization: `Bearer ${token}` };

      return this.http.get<any>(`${environment.baseUrl}/api/users/me`, { headers });
    }
    else {
      return new Observable<any>();
    }
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
