import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  declarations: [SearchComponent, MainPageComponent],
})
export class MainPageModule {}
