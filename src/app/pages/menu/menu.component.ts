import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isDark: boolean = false;

  constructor(private main: MainService) {
    this.isDark = this.main.darkMode;
  }

  ngOnInit(): void { }

  toggleDarkMode(): void {
    this.main.toggleDarkMode();
    this.isDark = this.main.darkMode;
  }
}
