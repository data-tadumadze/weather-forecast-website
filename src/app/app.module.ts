import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HeaderComponent } from './header/header.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherPredictionComponent } from './weather-prediction/weather-prediction.component';
import { HoverDirective } from './directives/hover.directive';
import { SubstringPipe } from './pipes/substring.pipe';
import { VirtualStorage } from './services/virtual-storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    HeaderComponent,
    HourlyWeatherComponent,
    NavbarComponent,
    WeatherPredictionComponent,
    HoverDirective,
    SubstringPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
