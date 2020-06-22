import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCityWeather(inputCity): Observable<any> {
    return this.httpClient
      .get(
        `${environment.openWeatherUrl}weather?q=${inputCity}
      &units=metric${environment.openWeatherApiKey}`
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
