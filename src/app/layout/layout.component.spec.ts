import { TestBed } from '@angular/core/testing';
import { layoutComponent } from './layout.component';

describe('layoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        layoutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(layoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Front-AC'`, () => {
    const fixture = TestBed.createComponent(layoutComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Front-AC');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(layoutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Front-AC');
  });
});
