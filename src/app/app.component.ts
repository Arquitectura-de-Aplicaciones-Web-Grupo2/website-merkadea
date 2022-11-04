import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  token = '';
  imgRta = '';
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private filesService: FilesService
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

  downloadPdf() {
    this.filesService
      .getFile(
        'my.pdf',
        'https://repositorio.iica.int/bitstream/handle/11324/7088/BVE18040224e.pdf',
        'application/pdf'
      )
      .subscribe();
  }
  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file).subscribe((rta) => {
        this.imgRta = rta.location;
      });
    }
  }
}
