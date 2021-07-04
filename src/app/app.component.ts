import { AfterViewInit, Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'store-app';

  constructor(private main: MainService) {
  }

  ngAfterViewInit() {
    this.main.setTheme(localStorage.theme ? true : false);
    this.main.openAuthenticationPopup();
  }

}
