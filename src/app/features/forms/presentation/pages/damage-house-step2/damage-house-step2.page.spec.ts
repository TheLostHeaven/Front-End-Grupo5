import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageHouseStep2Component } from './damage-house-step2.page';

describe('DamageHouseStep2Component', () => {
  let component: DamageHouseStep2Component;
  let fixture: ComponentFixture<DamageHouseStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DamageHouseStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageHouseStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
