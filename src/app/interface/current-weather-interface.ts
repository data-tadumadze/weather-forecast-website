


interface CurrentWeather {
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

let tbilisiCurrent: CurrentWeather = {
  id: 1,
  country: 'Georgia',
  city: 'Tbilisi',
  gmt: 'UTC +4H',
  weatherType: 'Cloudy',
  temperature: 11,
  humidity: 52,
  pressure: 1020,
  wind: 29,
  precipitation: 7,
};
