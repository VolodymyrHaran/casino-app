import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should persist login state', () => {
    service.login();

    expect(service.isLoggedIn).toBe(true);
    expect(localStorage.getItem('casino-app-authenticated')).toBe('true');
  });

  it('should restore persisted login state', () => {
    localStorage.setItem('casino-app-authenticated', 'true');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});

    service = TestBed.inject(AuthService);

    expect(service.isLoggedIn).toBe(true);
  });

  it('should clear persisted login state on logout', () => {
    service.login();
    service.logout();

    expect(service.isLoggedIn).toBe(false);
    expect(localStorage.getItem('casino-app-authenticated')).toBe('false');
  });
});
