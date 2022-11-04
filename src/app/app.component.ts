import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  token = '';
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}
  title = 'website-merkadea';

  createUser() {
    this.userService
      .create({
        name: 'Jhimy',
        email: 'jhimyjhimy26@gmail.com',
        password: '1212',
      })
      .subscribe((rta) => {
        console.log(rta);
      });
  }
  login() {
    this.authService
      .login('jhimyjhimy26@gmail.com', '1212')
      .subscribe((rta) => {
        console.log(rta.access_token);
        this.token = rta.access_token;
      });
  }

  getProfile() {
    this.authService.profile().subscribe((profile) => {
      console.log(profile);
    });
  }
}
