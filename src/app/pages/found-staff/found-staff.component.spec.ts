import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundStaffComponent } from './found-staff.component';

describe('FoundStaffComponent', () => {
  let component: FoundStaffComponent;
  let fixture: ComponentFixture<FoundStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
