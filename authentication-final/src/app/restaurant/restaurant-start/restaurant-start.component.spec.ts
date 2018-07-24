import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantStartComponent } from './restaurant-start.component';

describe('RestaurantStartComponent', () => {
  let component: RestaurantStartComponent;
  let fixture: ComponentFixture<RestaurantStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
