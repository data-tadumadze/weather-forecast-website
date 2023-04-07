import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CurrentWeatherService } from '../services/get-current-weather.service';
import { cities } from '../enums/cities.enum';
import { Router } from '@angular/router';
import { ChooseCityService } from '../services/choose-city.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];

  @Output() filterChanged = new EventEmitter<any>();

  formGroup = new FormGroup({
    search: new FormControl(),
    location: new FormControl(null),
  });

  myCurrentWeather: any;
  temperature: number = 0;
  city: string = '';
  iconID: number = 0;
  public cities = Object.values(cities);
  public filteredCities = this.cities;
  public showCities = false;

  constructor(
    private currentWeatherService: CurrentWeatherService,
    private router: Router,
    private chooseCityService: ChooseCityService
  ) {
    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      const capitalizedValue =
        value.search.charAt(0).toUpperCase() + value.search.slice(1);
      this.filteredCities = this.cities.filter((str) =>
        str.startsWith(capitalizedValue)
      );
    });
  }

  onCitySelected(city: string) {
    this.currentWeatherService.getCurrentWeather(city).subscribe({
      next: (res) => {
        this.myCurrentWeather = res;
        this.temperature = this.myCurrentWeather.data[0].app_temp;
        this.city = this.myCurrentWeather.data[0].city_name;
        this.iconID = this.myCurrentWeather.data[0].weather.icon;
      },
    });
    this.chooseCityService.setClickedCity(city);
    this.formGroup.patchValue({ search: '' });
    this.router.navigateByUrl(`main/${city}`);
    this.showCities = false;
  }

  ngOnChanges(): void {}

  ngOnInit(): void {
    this.chooseCityService.clickedCity$.subscribe((city) => {
      this.currentWeatherService.getCurrentWeather(city).subscribe({
        next: (res) => {
          this.myCurrentWeather = res;
          this.temperature = this.myCurrentWeather.data[0].app_temp;
          this.city = this.myCurrentWeather.data[0].city_name;
          this.iconID = this.myCurrentWeather.data[0].weather.icon;
        },
      });
    });
  }
}
