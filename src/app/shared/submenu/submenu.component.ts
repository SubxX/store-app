import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<boolean>();
  @HostListener('window:click', ['$event'])
  closePopup(e: any) {
    e.stopPropagation()
    this.closeMenuHandler();
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  closeMenuHandler(): void {
    this.closeMenu.emit();
  }

  logoutUser(): void {
    this.auth.logOutUser();
  }

}
