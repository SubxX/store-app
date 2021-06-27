import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { SubmenuComponent } from '../common/submenu/submenu.component';
import { ProductsComponent } from '../pages/products/products.component';
import { ProductComponent } from '../common/product/product.component';
import { NewsComponent } from '../pages/news/news.component';
import { NewsCardComponent } from '../common/news-card/news-card.component';
import { MobileNavComponent } from '../common/mobile-nav/mobile-nav.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { AuthenticationPopupComponent } from '../popups/authentication-popup/authentication-popup.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

// COMPONENT IMPORTS
export const componentImports = [
  HeaderComponent,
  FooterComponent,
  SubmenuComponent,
  ProductsComponent,
  ProductComponent,
  NewsComponent,
  NewsCardComponent,
  MobileNavComponent,
  MenuComponent,
  ProfileComponent,
  AuthenticationPopupComponent
]

// MATERIAL IMPORTS
export const materialImports = [
  MatIconModule,
  MatDialogModule
]

// FIREBASE
export const firebaseImports = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule,
]

