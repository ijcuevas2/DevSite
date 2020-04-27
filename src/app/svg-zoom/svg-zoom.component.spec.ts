import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgZoomComponent } from './svg-zoom.component';

describe('SvgZoomComponent', () => {
  let component: SvgZoomComponent;
  let fixture: ComponentFixture<SvgZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
