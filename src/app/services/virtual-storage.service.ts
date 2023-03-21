import { Injectable } from '@angular/core';
import { CurrentWeather } from '../interfaces/current-weather.model';

@Injectable({
  providedIn: 'root',
})
export class VirtualStorage {
  public items: CurrentWeather[] = [
    {
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
    },
  ];
  constructor() {
    this.items = [];
  }
  add(item: any) {
    this.items.push(item);
  }
  remove(id: number) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    return id;
  }
  update(id: number, updates: any) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updates };
    }
  }
  //   find(query: Partial<T>) {

  //     // Not all code path return a value

  //     return this.items.filter((item) => {
  //       for (const key in query) {
  //         if (item[key] !== query[key]) {
  //           return false;
  //         }
  //         return true;
  //       }
  //     });
  //   }

  // findOne(query: any) {
  //   return this.items.find((item) => {
  //     for (const key in query) {
  //       if (item[key] !== query[key]) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   });
  // }
  count() {
    return this.items.length;
  }
  sum(field: string) {
    return this.items.reduce(
      (sum, item) => (sum + (item as any)[field]) as number,
      0
    );
  }
}
