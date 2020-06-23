import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MainPageComponent } from './main-page.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [MainPageComponent],
  declarations: [SearchComponent, MainPageComponent, WeatherCardComponent],
})
export class MainPageModule {}
