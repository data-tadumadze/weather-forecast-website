export interface CurrentWeather {
  id: number;
  country: string;
  city: string;
  gmt: string;
  weatherType: string;
  temperature: number;
  humidity: number;
  pressure: number;
  wind: number;
  precipitation: number;
}
