import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationPopupComponent } from '../popups/authentication-popup/authentication-popup.component';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  darkMode: boolean = false;

  constructor(private dialog: MatDialog) { }

  toggleDarkMode(): void {
    this.darkMode ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark');
    this.changeTheme(!this.darkMode);
  }

  changeTheme(isDark: boolean): void {
    this.darkMode = isDark;
    this.darkMode ?
      document.documentElement.classList.add('dark') :
      document.documentElement.classList.remove('dark');
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
