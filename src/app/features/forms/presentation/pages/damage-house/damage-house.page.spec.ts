import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageHousePage } from './damage-house.page';

describe('DamageHouseComponent', () => {
  let component: DamageHousePage;
  let fixture: ComponentFixture<DamageHousePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DamageHousePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
