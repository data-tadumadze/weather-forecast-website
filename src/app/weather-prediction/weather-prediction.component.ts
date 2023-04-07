import { Component, OnInit } from '@angular/core';
import { weekDays } from '../enums/weekdays.enum';
import { weatherTermEnum } from '../enums/weather-term.enum';
import { WeatherPredictionService } from '../services/get-weather-prediction.service';
import { ChooseCityService } from '../services/choose-city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.css'],
})
export class WeatherPredictionComponent implements OnInit {
  myWeatherPrediction: any;
  arr: number[] = [0, 1, 2, 3, 4, 5];
  maxTemperature: number[] = [];
  minTemperature: number[] = [];
  nextDays: Date[] = [];
  iconID: number[] = [];
  description: any[] = [];
  clickedCity$: Observable<string>;

  constructor(
    private weatherPredictionService: WeatherPredictionService,
    private chooseCityService: ChooseCityService
  ) {
    this.clickedCity$ = this.chooseCityService.clickedCity$;
  }

  public weekDays = weekDays;
  public weatherTermEnum = weatherTermEnum;

  ngOnInit(): void {
    const today = new Date();
    let nextDay = new Date();
    this.chooseCityService.clickedCity$.subscribe((city) => {
      this.weatherPredictionService.getWeatherPrediction(city).subscribe({
        next: (res) => {
          this.myWeatherPrediction = res;
          for (let i = 0; i < this.arr.length; i++) {
            this.maxTemperature[i] =
              this.myWeatherPrediction.data[i].app_max_temp;
            this.minTemperature[i] =
              this.myWeatherPrediction.data[i].app_min_temp;
            this.iconID[i] = this.myWeatherPrediction.data[i].weather.icon;
            this.description[i] =
              this.myWeatherPrediction.data[i].weather.description;
            nextDay.setDate(today.getDate() + i);
            this.nextDays.push(nextDay);
            nextDay = new Date();
          }
        },
      });
    });
  }
}
