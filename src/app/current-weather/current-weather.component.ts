import { Component } from '@angular/core';
import { VirtualStorage } from '../services/virtual-storage.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  id: number;
  constructor(private virtualStorageService: VirtualStorage) {
    this.id = this.virtualStorageService.remove(1);
  }
}
