import { Component } from '@angular/core';
import { hours } from '../enums/hours.enum';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css'],
})
export class HourlyWeatherComponent {
  public hours = hours;
}
