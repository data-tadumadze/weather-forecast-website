import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.css'],
})
export class WeatherPredictionComponent {
  cloudy = true;
  @Input() cities = [""];
}