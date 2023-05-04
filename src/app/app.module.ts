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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { MainComponent } from './main/main.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { AuthGuard } from './auth/auth.guard';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    LogInComponent,
    MainComponent,
    PasswordRecoveryComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
