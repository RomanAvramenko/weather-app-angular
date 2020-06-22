import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputValue: string;

  result$: Observable<any>;
  newItem: string;

  constructor(private weatherService: WeatherService) {
    this.newItem = '';
  }

  ngOnInit(): void {
  }

  addItem(event) {
    this.result$ = this.weatherService.getCityWeather(this.newItem);
    this.newItem = '';
    event.preventDefault();
    console.log(this.result$);
  }
}
