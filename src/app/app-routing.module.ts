import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';


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
