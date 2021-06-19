import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Animations} from '../../animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [Animations.menuAnimation],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  darkMode: boolean = false;
  subMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.changeTheme(localStorage.theme ? true : false);
  }

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
