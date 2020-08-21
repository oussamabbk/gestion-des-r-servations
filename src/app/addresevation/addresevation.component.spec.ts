import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresevationComponent } from './addresevation.component';

describe('AddresevationComponent', () => {
  let component: AddresevationComponent;
  let fixture: ComponentFixture<AddresevationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresevationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
