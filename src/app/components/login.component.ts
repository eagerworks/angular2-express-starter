import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../services/user_service';

@Component({
  selector: 'login',
  viewProviders: [UserService],
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../stylesheets/login.component.scss']
})

export class LoginComponent {
  errorMessage: string;
  user: User = new User;
  authentication_token: string;

  constructor(
    private router: Router,
    private UserService: UserService
  ) {}

  signIn() {
    this.router.navigate(['/page']); // comment to call API through user service

    // uncomment to call API through user service
    // this.UserService.signIn(this.user).subscribe(
    //   data => {
    //     this.authentication_token = data.authentication_token;
    //     this.router.navigate(['/page']);
    //   },
    //   error =>  this.errorMessage = <any>error
    // );
  }
}
