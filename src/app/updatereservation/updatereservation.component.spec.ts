import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereservationComponent } from './updatereservation.component';

describe('UpdatereservationComponent', () => {
  let component: UpdatereservationComponent;
  let fixture: ComponentFixture<UpdatereservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatereservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
