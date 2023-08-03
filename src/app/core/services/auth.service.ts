import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    const tokenJson = localStorage.getItem('token');
    return tokenJson ? JSON.parse(tokenJson) : null;
  }

  hasToken() {
    const userJson = localStorage.getItem('token');
    return Boolean(userJson);
  }

}
