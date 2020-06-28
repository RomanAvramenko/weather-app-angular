import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Input() item;

  constructor() {}

  ngOnInit(): void {
  }

  deleteCard() {
    this.deleteItem.emit(this.item.id);
  }
}