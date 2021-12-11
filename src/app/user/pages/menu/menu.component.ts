import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/authentication/auth.service';
import { Location } from '@angular/common';


@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private auth: AuthService, public location: Location) { }

  ngOnInit(): void { }

  logOut(): void {
    this.auth.logOutUser();
  }

}
