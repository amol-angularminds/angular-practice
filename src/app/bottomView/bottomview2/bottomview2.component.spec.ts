import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottomview2Component } from './bottomview2.component';

describe('Bottomview2Component', () => {
  let component: Bottomview2Component;
  let fixture: ComponentFixture<Bottomview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottomview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bottomview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
