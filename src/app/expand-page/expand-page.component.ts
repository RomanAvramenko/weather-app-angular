import { WeatherService } from './../shared/weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-expand-page',
  templateUrl: './expand-page.component.html',
  styleUrls: ['./expand-page.component.scss'],
})
export class ExpandPageComponent implements OnInit {
  forecast;
  name = 'Expand';

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  transformData(data) {
    return {
      id: data.city.id,
      name: data.city.name,
      list: this.transformList(data.list),
    };
  }

  parseList(item) {
    return {
      temp: item.main.temp.toFixed(),
      icon: item.weather[0].icon,
      date: item.dt_txt,
      desc: item.weather[0].description,
    };
  }

  transformList(list) {
    const currentDay = list[0].dt_txt.replace(/ .*$/, '');
    const filteredDays: Array<any> = [];
    list.map((item: any) => {
      const days = item.dt_txt.replace(/ .*$/, '');
      if (currentDay !== days) {
        filteredDays.push(this.parseList(item));
      }
      return item;
    });
    return filteredDays.filter((i: number, index: number) => index % 4 === 0);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.weatherService.getForecast(params['id']).subscribe((data) => {
        this.forecast = this.transformData(data);
        console.log(this.forecast);
      });
    });
  }
}
