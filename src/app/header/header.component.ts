import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../services/get-current-weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myCurrentWeather: any;
  temperature: number = 0;
  city: string = '';
  iconID: number = 0;

  constructor(private currentWeatherService: CurrentWeatherService) {}

  ngOnInit(): void {
    this.currentWeatherService.getCurrentWeather('tbilisi').subscribe({
      next: (res) => {
        this.myCurrentWeather = res;
        this.temperature = this.myCurrentWeather.data[0].app_temp;
        this.city = this.myCurrentWeather.data[0].city_name;
        this.iconID = this.myCurrentWeather.data[0].weather.icon;
      },
    });
  }
}
