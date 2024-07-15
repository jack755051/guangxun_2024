import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGuangxunComponent } from './about-guangxun.component';

describe('AboutGuangxunComponent', () => {
  let component: AboutGuangxunComponent;
  let fixture: ComponentFixture<AboutGuangxunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutGuangxunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutGuangxunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
