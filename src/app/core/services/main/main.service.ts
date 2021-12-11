import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationPopupComponent } from '../../../shared/authentication-popup/authentication-popup.component';
import { SetDarkmode } from '@store/actions/userActions';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private dialog: MatDialog, private store: Store, @Inject(DOCUMENT) private _document: any) { }

  setTheme(isDark: boolean): void {
    this.store.dispatch(new SetDarkmode(isDark));
  }

  get document(): HTMLElement {
    return this._document.documentElement
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
    this.openModal(AuthenticationPopupComponent, { width: '350px', autoFocus: false });
  }

}
