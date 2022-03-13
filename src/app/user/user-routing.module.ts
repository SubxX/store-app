import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', component: ProductsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cart', component: CartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
