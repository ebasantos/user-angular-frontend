import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesUsersPostComponent } from './machines-users-post.component';

describe('MachinesUsersPostComponent', () => {
  let component: MachinesUsersPostComponent;
  let fixture: ComponentFixture<MachinesUsersPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesUsersPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesUsersPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
