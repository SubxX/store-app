import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationPopupComponent } from '../../popups/authentication-popup/authentication-popup.component';
import { SetDarkmode } from '../../state/actions/userActions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  darkMode: boolean = false;

  constructor(private dialog: MatDialog, private store: Store) { }

  setTheme(isDark: boolean): void {
    this.store.dispatch(new SetDarkmode(isDark));
  }

  openModal(component: any, options: Object): any {
    return this.dialog.open(component, {
      closeOnNavigation: true,
      maxHeight: '90vh',
      maxWidth: '90%',
      ...options
    });
  }

  openAuthenticationPopup(): void {
    this.openModal(AuthenticationPopupComponent, { width: '350px' });
  }

}
