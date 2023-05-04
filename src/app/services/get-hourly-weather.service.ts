import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { currentAPI } from '../environments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class HourlyWeatherService {
  private apiUrl = currentAPI.apiUrl;
  constructor(private http: HttpClient) {}

  getHourlyWeather(city: string) {
    return this.http.get(
      `${this.apiUrl}forecast/hourly?city=${city}&key=95742094fdf14678b79d1a18abde8412`
    );
  }
}

// d56fa0ebf6bd4e5d850586329f2003ec

// 95742094fdf14678b79d1a18abde8412
