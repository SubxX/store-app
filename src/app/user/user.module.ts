import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

import { SharedModule } from '../shared/shared.module';

// material Imports
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UserComponent,
    MenuComponent,
    NewsComponent,
    ProductsComponent,
    ProfileComponent,
    ProductComponent,
    NewsCardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatIconModule,
  ]
})
export class UserModule { }
