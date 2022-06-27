import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByFlightComponent } from './sort-by-flight.component';

describe('SortByFlightComponent', () => {
  let component: SortByFlightComponent;
  let fixture: ComponentFixture<SortByFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
