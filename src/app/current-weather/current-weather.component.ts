import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../services/get-current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  myCurrentWeather: any;
  humidity: number = 0;
  pressure: number = 0;
  wind: number = 0;
  precipitation: number = 0;

  constructor(private currentWeatherService: CurrentWeatherService) {}

  ngOnInit(): void {
    this.currentWeatherService.getCurrentWeather('tbilisi').subscribe({
      next: (res) => {
        this.myCurrentWeather = res;
        this.humidity = this.myCurrentWeather.data[0].rh;
        this.pressure = this.myCurrentWeather.data[0].pres;
        this.wind = this.myCurrentWeather.data[0].wind_spd;
        this.precipitation = this.myCurrentWeather.data[0].precip.toFixed(2);
      },

      error: (error) => console.log(error.message),

      complete: () => console.log('API call completed'),
    });
  }
}
