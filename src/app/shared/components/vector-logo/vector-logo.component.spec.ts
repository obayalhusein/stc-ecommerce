/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VectorLogoComponent } from './vector-logo.component';

describe('VectorLogoComponent', () => {
  let component: VectorLogoComponent;
  let fixture: ComponentFixture<VectorLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
