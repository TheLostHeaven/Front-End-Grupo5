import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisDamagedComponent } from './diagnosis-damaged.page';

describe('DiagnosisDamagedComponent', () => {
  let component: DiagnosisDamagedComponent;
  let fixture: ComponentFixture<DiagnosisDamagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosisDamagedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosisDamagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
