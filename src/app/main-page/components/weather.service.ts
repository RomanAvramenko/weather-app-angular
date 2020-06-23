import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  public errors$: Subject<string> = new Subject<string>();

  constructor(private httpClient: HttpClient) {}

  getCityWeather(inputCity: string): Observable<any> {
    return this.httpClient
      .get(
        `${environment.openWeatherUrl}weather?q=${inputCity}&units=metric&APPID=${environment.openWeatherApiKey}`
      )
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error.message === 'city not found') {
      this.errors$.next('This city is not exist');
    } else {
      return throwError(error);
    }
  }
}
