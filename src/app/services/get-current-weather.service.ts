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
      `${this.apiUrl}/current?city=${city}&key=95742094fdf14678b79d1a18abde8412`
    );
  }
}

// d56fa0ebf6bd4e5d850586329f2003ec

// 95742094fdf14678b79d1a18abde8412
