import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeWithChartsComponent } from './card-type-with-charts.component';

describe('CardTypeWithChartsComponent', () => {
  let component: CardTypeWithChartsComponent;
  let fixture: ComponentFixture<CardTypeWithChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTypeWithChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTypeWithChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
