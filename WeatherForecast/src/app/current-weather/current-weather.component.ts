import { Component } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  items = [
    { id: 1, city: 'Tbilisi', temperature: 12, humidity: 76 },
    { id: 1, city: 'Batumi', temperature: 14, humidity: 92 },
  ];
}
