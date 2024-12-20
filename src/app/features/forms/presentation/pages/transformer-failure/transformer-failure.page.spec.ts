import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerFailureComponent } from './transformer-failure.page';

describe('TransformerFailureComponent', () => {
  let component: TransformerFailureComponent;
  let fixture: ComponentFixture<TransformerFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransformerFailureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformerFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
