import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmBasketComponent } from './om-basket.component';

describe('OmBasketComponent', () => {
  let component: OmBasketComponent;
  let fixture: ComponentFixture<OmBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
