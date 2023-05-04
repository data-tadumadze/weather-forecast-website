import { Component, OnInit } from '@angular/core';
import { capitalCities } from '../enums/cities.enum';
import { MapState } from '../services/map-state.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  capitalCities = Object.keys(capitalCities);
  showingTooltip: string | null = null;

  constructor(private mapState: MapState) {}

  showTooltip(city: string) {
    this.showingTooltip = city;
    this.mapState.getCitiesTemp(city);
  }

  hideTooltip() {
    this.showingTooltip = null;
  }

  getMaxTemperature() {
    const maxTemp = this.mapState.maxTemperature;
    return `Day: ${maxTemp}℃`;
  }

  getMinTemperature() {
    const minTemp = this.mapState.minTemperature;
    return `Day: ${minTemp}℃`;
  }

  ngOnInit(): void {}
}
