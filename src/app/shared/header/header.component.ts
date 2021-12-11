import { Component, OnInit } from '@angular/core';
import { menuAnimation } from '@animations/animations';
import { MainService } from '@services/main/main.service';
import { Store } from '@ngxs/store';
import { User } from '@store/models/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [menuAnimation],
})
export class HeaderComponent implements OnInit {
  subMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData: Observable<User>;

  constructor(
    public main: MainService,
    private store: Store
  ) {
    this.userData = this.store.select(state => state.user.userInfo);
  }

  ngOnInit(): void {
  }

  openAuthPopup(): void {
    this.subMenuOpen.next(false)
    this.main.openAuthenticationPopup();
  }

}
