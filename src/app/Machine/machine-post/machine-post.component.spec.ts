import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinePostComponent } from './machine-post.component';

describe('MachinePostComponent', () => {
  let component: MachinePostComponent;
  let fixture: ComponentFixture<MachinePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
