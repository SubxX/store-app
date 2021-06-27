import { Component, OnInit } from '@angular/core';
import { mobNavAnimation } from '../../exports/animations';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [mobNavAnimation]
})
export class MobileNavComponent implements OnInit {
  isLogged = false;
  constructor() { }

  ngOnInit(): void {
  }

}
