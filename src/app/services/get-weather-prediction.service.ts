import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { currentAPI } from '../environments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class WeatherPredictionService {
  private apiUrl = currentAPI.apiUrl;
  constructor(private http: HttpClient) {}

  getWeatherPrediction(city: string) {
    return this.http.get(
      `${this.apiUrl}forecast/daily?city=${city}&key=d56fa0ebf6bd4e5d850586329f2003ec`
    );
  }
}
