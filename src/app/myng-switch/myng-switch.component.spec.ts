import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyngSwitchComponent } from './myng-switch.component';

describe('MyngSwitchComponent', () => {
  let component: MyngSwitchComponent;
  let fixture: ComponentFixture<MyngSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyngSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyngSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
