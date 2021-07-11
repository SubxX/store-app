import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './user-pages/menu/menu.component';
import { NewsComponent } from './user-pages/news/news.component';
import { ProductsComponent } from './user-pages/products/products.component';
import { ProfileComponent } from './user-pages/profile/profile.component';


const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', redirectTo: '/', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
