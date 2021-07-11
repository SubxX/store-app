import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

// material Imports
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UserComponent,
    MenuComponent,
    NewsComponent,
    ProductsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

    MatIconModule
  ]
})
export class UserModule { }
