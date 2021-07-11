import { Component, OnInit } from '@angular/core';
import { mobNavAnimation } from '../../exports/animations';
import { Store } from '@ngxs/store';
import { User } from 'src/app/state/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [mobNavAnimation]
})
export class MobileNavComponent implements OnInit {
  userData: Observable<User>;

  constructor(private store: Store) {
    this.userData = this.store.select(state => state.user.userInfo);
  }

  ngOnInit(): void {
  }

}
