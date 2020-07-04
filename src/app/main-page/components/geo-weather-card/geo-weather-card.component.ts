import { WeatherService } from './../../../shared/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-weather-card',
  templateUrl: './geo-weather-card.component.html',
  styleUrls: ['./geo-weather-card.component.scss'],
})
export class GeoWeatherCardComponent implements OnInit {
  geoData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCoords((position) => {
      const latitude = position.coords.latitude.toFixed(5);
      const longitude = position.coords.longitude.toFixed(5);
      this.weatherService
        .getGeoWeather(latitude, longitude)
        .subscribe((data) => {
          this.geoData = data;
        });
    });
  }

  getCoords(position) {
    navigator.geolocation.getCurrentPosition(position);
  }
}
