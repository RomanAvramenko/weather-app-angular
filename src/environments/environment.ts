import { Environment } from './interface';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  openWeatherApiKey: 'f32f005175f0b009bc5e5052a9f9722c',
  unsplashApiKey:
    '12d2d6b1c85dfb2d161d77513660ad8cc333ac66ea4bedb36b7691096b4c3dad',
  openWeatherUrl: 'https://api.openweathermap.org/data/2.5/',
  unsplashUrl: 'https://api.unsplash.com/search/photos?',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
