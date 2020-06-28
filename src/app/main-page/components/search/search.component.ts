import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  @Input() message: string;

  newItem: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchCity() {
    this.searchEvent.emit(this.newItem);
    this.newItem = '';
  }
}