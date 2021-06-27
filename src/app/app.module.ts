import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentImports, materialImports, firebaseImports } from './exports/exports';


@NgModule({
  declarations: [
    AppComponent,
    componentImports
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    materialImports,
    firebaseImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
