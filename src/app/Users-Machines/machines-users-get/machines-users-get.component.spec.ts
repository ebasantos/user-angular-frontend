import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesUsersGetComponent } from './machines-users-get.component';

describe('MachinesUsersGetComponent', () => {
  let component: MachinesUsersGetComponent;
  let fixture: ComponentFixture<MachinesUsersGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesUsersGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesUsersGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
