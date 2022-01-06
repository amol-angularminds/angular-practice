import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottomview1Component } from './bottomview1.component';

describe('Bottomview1Component', () => {
  let component: Bottomview1Component;
  let fixture: ComponentFixture<Bottomview1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottomview1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bottomview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
