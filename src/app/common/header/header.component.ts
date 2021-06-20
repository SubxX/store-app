import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [Animations.menuAnimation],
})
export class HeaderComponent implements OnInit {
  darkMode: boolean = false;
  subMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
