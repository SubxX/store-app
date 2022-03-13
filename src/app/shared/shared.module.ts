import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeTogglerComponent } from './darkmode-toggler/darkmode-toggler.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { AuthenticationPopupComponent } from './authentication-popup/authentication-popup.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';


// Custom Pipes
import { FormControlPipe } from '../core/pipes/form-control.pipe';

@NgModule({
  declarations: [
    DarkmodeTogglerComponent,
    FooterComponent,
    HeaderComponent,
    MobileNavComponent,
    SubmenuComponent,
    AuthenticationPopupComponent,
    FormControlPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  exports: [
    DarkmodeTogglerComponent,
    FooterComponent,
    HeaderComponent,
    MobileNavComponent
  ]
})
export class SharedModule { }
