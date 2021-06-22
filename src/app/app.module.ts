import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TecleoModule } from './tecleo/tecleo.module';

@NgModule({
  declarations: [AppComponent, PieComponent, CabeceraComponent],
  imports: [BrowserModule, AppRoutingModule, TecleoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
