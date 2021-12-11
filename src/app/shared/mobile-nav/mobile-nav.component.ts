import { Component, OnInit } from '@angular/core';
import { mobNavAnimation } from '@animations/animations';
import { Store } from '@ngxs/store';
import { MainService } from '@services/main/main.service';
import { User } from '@store/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [mobNavAnimation]
})
export class MobileNavComponent implements OnInit {
  userData: Observable<User>;

  constructor(private store: Store, public main: MainService) {
    this.userData = this.store.select(state => state.user.userInfo);
  }

  ngOnInit(): void {
  }

}
