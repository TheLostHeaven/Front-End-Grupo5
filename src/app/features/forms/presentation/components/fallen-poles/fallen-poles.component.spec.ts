import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallenPolesComponent } from './fallen-poles.component';

describe('FallenPolesComponent', () => {
  let component: FallenPolesComponent;
  let fixture: ComponentFixture<FallenPolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallenPolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallenPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
