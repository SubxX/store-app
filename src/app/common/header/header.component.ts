import { Component, OnInit } from '@angular/core';
import { menuAnimation } from '../../exports/animations';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [menuAnimation],
})
export class HeaderComponent implements OnInit {
  darkMode: boolean = false;
  subMenuOpen: boolean = false;

  constructor(private main: MainService) { }

  ngOnInit(): void {
  }

  openAuthPopup(): void {
    this.main.openAuthenticationPopup();
  }

}
