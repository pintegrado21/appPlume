import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from 'highcharts-angular';
import { APP_BASE_HREF } from '@angular/common';
import { MarkerService } from './marker.service';

import { AppComponent } from './app.component';
import { FechaComponent } from './fecha/fecha.component';
import { InicioComponent } from './inicio/inicio.component';
import { MapComponent } from './mapa1/mapa1.component';
import { AireService } from './aire.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, HighchartsChartModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, FechaComponent, InicioComponent, MapComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AireService, MarkerService, {provide: APP_BASE_HREF, useValue: '/aires'} ]
})
export class AppModule { }
