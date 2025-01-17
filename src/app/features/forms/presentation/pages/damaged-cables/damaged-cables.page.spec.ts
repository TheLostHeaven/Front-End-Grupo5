import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedCablesComponent } from './damaged-cables.page';

describe('DamagedCablesComponent', () => {
  let component: DamagedCablesComponent;
  let fixture: ComponentFixture<DamagedCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DamagedCablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DamagedCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
