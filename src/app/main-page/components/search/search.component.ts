import { WeatherService } from './../weather.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [WeatherService],
})
export class SearchComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  @Input() message: string;

  newItem: string = '';

  constructor(public weather: WeatherService) {}

  ngOnInit(): void {}

  searchCity() {
    this.searchEvent.emit(this.newItem);
    this.newItem = '';
  }
}
