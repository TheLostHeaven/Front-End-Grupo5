import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDamageComponent } from './sector-damage.page';

describe('SectorDamageComponent', () => {
  let component: SectorDamageComponent;
  let fixture: ComponentFixture<SectorDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorDamageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
