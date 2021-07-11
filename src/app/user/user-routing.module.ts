import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', component: ProductsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
