import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SubmenuComponent } from './common/submenu/submenu.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './common/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsCardComponent } from './common/news-card/news-card.component';
import { MobileNavComponent } from './common/mobile-nav/mobile-nav.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubmenuComponent,
    ProductsComponent,
    ProductComponent,
    NewsComponent,
    NewsCardComponent,
    MobileNavComponent,
    MenuComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
