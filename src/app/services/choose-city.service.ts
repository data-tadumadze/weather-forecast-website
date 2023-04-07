import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChooseCityService {
  public clickedCity$ = new BehaviorSubject<string>('Tbilisi');

  setClickedCity(city: string) {
    this.clickedCity$.next(city);
  }

  getClickedCity() {
    return this.clickedCity$.asObservable();
  }
}
