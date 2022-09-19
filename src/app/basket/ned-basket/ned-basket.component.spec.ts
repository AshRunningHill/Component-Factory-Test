import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NedBasketComponent } from './ned-basket.component';

describe('NedBasketComponent', () => {
  let component: NedBasketComponent;
  let fixture: ComponentFixture<NedBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NedBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NedBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
