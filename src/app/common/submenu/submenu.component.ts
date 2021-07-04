import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenuHandler(): void {
    this.closeMenu.emit();
  }

}
