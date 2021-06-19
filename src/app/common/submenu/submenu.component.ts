import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<boolean>();
  @Output() switchTheme = new EventEmitter<boolean>();
  @Input('isDark') isDark!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenuHandler():void{
    this.closeMenu.emit();
  }

  darkModeHandler():void{
    this.switchTheme.emit();
  }

}
