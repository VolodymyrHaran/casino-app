import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'casino-app-authenticated';
  private loggedInSubject = new BehaviorSubject<boolean>(this.getStoredLoginState());

  isLoggedIn$ = this.loggedInSubject.asObservable();

  get isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  login() {
    this.setStoredLoginState(true);
    this.loggedInSubject.next(true);
  }

  logout() {
    this.setStoredLoginState(false);
    this.loggedInSubject.next(false);
  }

  private getStoredLoginState(): boolean {
    try {
      return localStorage.getItem(this.storageKey) === 'true';
    } catch {
      return false;
    }
  }

  private setStoredLoginState(isLoggedIn: boolean): void {
    try {
      localStorage.setItem(this.storageKey, String(isLoggedIn));
    } catch {
      // Keep the in-memory auth state working when storage is unavailable.
    }
  }
}
