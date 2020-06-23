import { WeatherService } from './components/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  results = [];
  message: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

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
}
