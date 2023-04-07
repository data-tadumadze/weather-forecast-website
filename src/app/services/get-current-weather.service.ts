import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { currentAPI } from '../environments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  private apiUrl = currentAPI.apiUrl;
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string) {
    return this.http.get(
      `${this.apiUrl}/current?city=${city}&key=d56fa0ebf6bd4e5d850586329f2003ec`
    );
  }
}

// d56fa0ebf6bd4e5d850586329f2003ec
