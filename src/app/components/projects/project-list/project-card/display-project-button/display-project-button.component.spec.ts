import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProjectButtonComponent } from './display-project-button.component';

describe('DisplayProjectButtonComponent', () => {
  let component: DisplayProjectButtonComponent;
  let fixture: ComponentFixture<DisplayProjectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProjectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
