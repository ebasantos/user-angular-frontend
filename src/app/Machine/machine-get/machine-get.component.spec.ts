import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineGetComponent } from './machine-get.component';

describe('MachineGetComponent', () => {
  let component: MachineGetComponent;
  let fixture: ComponentFixture<MachineGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
