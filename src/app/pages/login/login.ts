import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  login() {
    this.authService.login();
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/games';

    this.router.navigateByUrl(returnUrl);
  }
}
