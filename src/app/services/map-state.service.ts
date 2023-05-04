import { Injectable } from '@angular/core';
import { WeatherPredictionService } from '../services/get-weather-prediction.service';

@Injectable({
  providedIn: 'root',
})
export class MapState {
  myWeatherPrediction: any;
  maxTemperature: number = 0;
  minTemperature: number = 0;

  constructor(private weatherPredictionService: WeatherPredictionService) {}

  getCitiesTemp(hoveredCity: string) {
    this.weatherPredictionService.getWeatherPrediction(hoveredCity).subscribe({
      next: (res) => {
        this.myWeatherPrediction = res;
        this.maxTemperature = this.myWeatherPrediction.data[0].app_max_temp;
        this.minTemperature = this.myWeatherPrediction.data[0].app_min_temp;
      },
    });
  }
}
