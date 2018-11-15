import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCComponent } from './dc.component';

describe('DCComponent', () => {
  let component: DCComponent;
  let fixture: ComponentFixture<DCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
