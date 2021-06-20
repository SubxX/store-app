import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  darkMode: boolean = false;

  constructor() { }

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

}
