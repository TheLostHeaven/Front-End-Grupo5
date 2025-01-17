import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageHouseStep3Component } from './damage-house-step3.page';

describe('DamageHouseStep3Component', () => {
  let component: DamageHouseStep3Component;
  let fixture: ComponentFixture<DamageHouseStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DamageHouseStep3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageHouseStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
