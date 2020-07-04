import { WeatherService } from './../shared/weather.service';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  results = [];
  message: string;

  constructor(
    private weatherService: WeatherService,
    private persistenceService: PersistenceService
  ) {}

  @HostListener('window:beforeunload')
  saveToLoacalStorage() {
    this.results &&
      this.persistenceService.set('weather', this.results, {
        type: StorageType.LOCAL,
      });
  }

  ngOnInit(): void {
    if (this.persistenceService.get('weather', StorageType.LOCAL)) {
      this.results = this.persistenceService.get('weather', StorageType.LOCAL);
    }
  }

  addItem(newItem) {
    this.weatherService.getCityWeather(newItem).subscribe((data) => {
      if (!this.results.some((i) => i.id === data.id)) {
        this.message = '';

        return this.results.push(data);
      } else {
        this.message = 'This city is alredy exist';
      }
    });
  }

  deleteItem(id) {
    this.results = this.results.filter((el) => el.id !== id);
  }
}
