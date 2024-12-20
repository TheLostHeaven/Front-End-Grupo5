import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDamageThreeComponent } from './sector-damage-three.page';

describe('SectorDamageThreeComponent', () => {
  let component: SectorDamageThreeComponent;
  let fixture: ComponentFixture<SectorDamageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorDamageThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorDamageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
