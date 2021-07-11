import { AfterViewInit, Component } from '@angular/core';
import { MainService } from './services/main/main.service';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'store-app';

  constructor(
    private main: MainService,
    private auth: AuthService
  ) {
    const user: any = localStorage.getItem('user');
    if (user) this.auth.setUserData(JSON.parse(user));
  }

  ngAfterViewInit() {
    this.main.setTheme(localStorage.theme ? true : false);
    // this.main.openAuthenticationPopup();
  }

}
