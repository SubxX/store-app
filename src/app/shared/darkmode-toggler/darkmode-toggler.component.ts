import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetDarkmode } from '@store/actions/userActions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-darkmode-toggler',
  templateUrl: './darkmode-toggler.component.html',
  styleUrls: ['./darkmode-toggler.component.scss']
})
export class DarkmodeTogglerComponent implements OnInit {
  isDark: Observable<boolean>;
  constructor(private store: Store) {
    this.isDark = this.store.select(state => state.user.darkMode);
  }

  ngOnInit(): void {
  }

  toggleDarkMode(): void {
    this.isDark.pipe(take(1)).subscribe(dt => this.store.dispatch(new SetDarkmode(!dt)));
  }
}
