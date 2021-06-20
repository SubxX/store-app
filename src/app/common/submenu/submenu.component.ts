import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  isDark: boolean = false;
  @Output() closeMenu = new EventEmitter<boolean>();

  constructor(private main: MainService) {
    this.isDark = this.main.darkMode;
  }

  ngOnInit(): void {
  }

  toggleDarkMode(): void {
    this.main.toggleDarkMode();
    this.isDark = this.main.darkMode;
  }

  closeMenuHandler(): void {
    this.closeMenu.emit();
  }

}
