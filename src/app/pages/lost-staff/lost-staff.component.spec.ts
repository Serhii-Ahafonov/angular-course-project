import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostStaffComponent } from './lost-staff.component';

describe('LostStaffComponent', () => {
  let component: LostStaffComponent;
  let fixture: ComponentFixture<LostStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
