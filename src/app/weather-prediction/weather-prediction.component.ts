import { Component, Input } from '@angular/core';
import { weekDays } from '../enums/weekdays.enum';
import { weatherTermEnum } from '../enums/weather-term.enum';

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.css'],
})
export class WeatherPredictionComponent {
  cloudy = true;
  @Input() cities = [''];
  public weekDays = weekDays;
  public weatherTermEnum = weatherTermEnum;
}
