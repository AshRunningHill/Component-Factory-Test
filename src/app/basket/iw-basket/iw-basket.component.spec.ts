import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwBasketComponent } from './iw-basket.component';

describe('IwBasketComponent', () => {
  let component: IwBasketComponent;
  let fixture: ComponentFixture<IwBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IwBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
