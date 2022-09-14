import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz1Component } from './quiz1.component';

describe('Quiz1Component', () => {
  let component: Quiz1Component;
  let fixture: ComponentFixture<Quiz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quiz1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quiz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
