import { Component, OnInit } from '@angular/core';
import { menuAnimation } from '../../exports/animations';
import { MainService } from 'src/app/services/main/main.service';
import { Store } from '@ngxs/store';
import { User } from 'src/app/state/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [menuAnimation],
})
export class HeaderComponent implements OnInit {
  darkMode: boolean = false;
  subMenuOpen: boolean = false;
  userData: Observable<User>;

  constructor(
    private main: MainService,
    private store: Store
  ) {
    this.userData = this.store.select(state => state.user.userInfo);
  }

  ngOnInit(): void {
  }

  openAuthPopup(): void {
    this.main.openAuthenticationPopup();
  }

}
