import { Component, OnInit } from '@angular/core';
import { HourlyWeatherService } from '../services/get-hourly-weather.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css'],
})
export class HourlyWeatherComponent implements OnInit {
  myHourlyWeather: any;
  arr: number[] = [0, 1, 2, 3, 4, 5];
  temperature: number[] = [];
  date: string[] = [];
  time: string[] = [];
  iconID: number[] = [];

  constructor(private hourlyWeatherService: HourlyWeatherService) {}

  ngOnInit(): void {
    this.hourlyWeatherService.getHourlyWeather('tbilisi').subscribe({
      next: (res: any) => {
        this.myHourlyWeather = res;
        for (let i = 0; i < this.arr.length; i++) {
          this.date[i] = this.myHourlyWeather.data[i].timestamp_local;
          this.time[i] = this.date[i].slice(11, 16);
          this.iconID[i] = this.myHourlyWeather.data[i].weather.icon;
          this.temperature[i] = this.myHourlyWeather.data[i].app_temp;
        }
      },
    });
  }
}
