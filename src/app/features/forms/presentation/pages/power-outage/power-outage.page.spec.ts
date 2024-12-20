import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOutageComponent } from './power-outage.page';

describe('PowerOutageComponent', () => {
  let component: PowerOutageComponent;
  let fixture: ComponentFixture<PowerOutageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerOutageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
