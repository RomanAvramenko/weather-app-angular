import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandPageComponent } from './expand-page.component';

describe('ExpandPageComponent', () => {
  let component: ExpandPageComponent;
  let fixture: ComponentFixture<ExpandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
