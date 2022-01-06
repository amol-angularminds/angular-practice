import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottomview3Component } from './bottomview3.component';

describe('Bottomview3Component', () => {
  let component: Bottomview3Component;
  let fixture: ComponentFixture<Bottomview3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottomview3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bottomview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
