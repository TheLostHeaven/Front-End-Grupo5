import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOutagesComponent } from './power-outages.component';

describe('PowerOutagesComponent', () => {
  let component: PowerOutagesComponent;
  let fixture: ComponentFixture<PowerOutagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerOutagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerOutagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
