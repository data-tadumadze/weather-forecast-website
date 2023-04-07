import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../services/get-current-weather.service';
import { ChooseCityService } from '../services/choose-city.service';
import { Observable } from 'rxjs';

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
  clickedCity$: Observable<string>;

  constructor(
    private currentWeatherService: CurrentWeatherService,
    private chooseCityService: ChooseCityService
  ) {
    this.clickedCity$ = this.chooseCityService.clickedCity$;
  }

  onCityChange(city: string) {
    this.chooseCityService.setClickedCity(city);
  }

  ngOnInit(): void {
    this.chooseCityService.clickedCity$.subscribe((city) => {
      this.currentWeatherService.getCurrentWeather(city).subscribe({
        next: (res) => {
          this.myCurrentWeather = res;
          this.humidity = this.myCurrentWeather.data[0].rh;
          this.pressure = this.myCurrentWeather.data[0].pres.toFixed(1);
          this.wind = this.myCurrentWeather.data[0].wind_spd.toFixed(1);
          this.precipitation = this.myCurrentWeather.data[0].precip.toFixed(2);
        },

        error: (error) => console.log(error.message),

        complete: () => console.log('API call completed'),
      });
    });
  }
}
