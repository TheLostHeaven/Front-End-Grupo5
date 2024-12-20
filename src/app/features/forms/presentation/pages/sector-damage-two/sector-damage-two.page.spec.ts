import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDamageTwoComponent } from './sector-damage-two.page';

describe('SectorDamageTwoComponent', () => {
  let component: SectorDamageTwoComponent;
  let fixture: ComponentFixture<SectorDamageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorDamageTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorDamageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
