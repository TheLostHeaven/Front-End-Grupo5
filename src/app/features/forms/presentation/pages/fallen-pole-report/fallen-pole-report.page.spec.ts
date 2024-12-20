import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallenPoleReportComponent } from './fallen-pole-report.page';

describe('FallenPoleReportComponent', () => {
  let component: FallenPoleReportComponent;
  let fixture: ComponentFixture<FallenPoleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallenPoleReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallenPoleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
