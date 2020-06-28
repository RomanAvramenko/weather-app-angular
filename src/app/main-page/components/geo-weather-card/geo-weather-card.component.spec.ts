import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoWeatherCardComponent } from './geo-weather-card.component';

describe('GeoWeatherCardComponent', () => {
  let component: GeoWeatherCardComponent;
  let fixture: ComponentFixture<GeoWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
