import { MainPageModule } from './main-page/main-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CommonLayoutComponent } from './shared/components/common-layout/common-layout.component';
import { ExpandPageComponent } from './expand-page/expand-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    CommonLayoutComponent,
    ExpandPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MainPageModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
