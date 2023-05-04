import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CurrentWeatherService } from '../services/get-current-weather.service';

@Injectable({
  providedIn: 'root',
})
export class ChooseCityService {
  clickedCity$ = new BehaviorSubject<string>('');
  response$ = new BehaviorSubject<any>(null);

  constructor(private currentWeatherService: CurrentWeatherService) {}

  setClickedCity(city: string) {
    this.clickedCity$.next(city);
      this.currentWeatherService.getCurrentWeather(city).subscribe({
        next: (res) => {
          this.response$.next(res);
        },
      });
  } 

  getClickedCity() {
    return this.clickedCity$.asObservable();
  }
}
