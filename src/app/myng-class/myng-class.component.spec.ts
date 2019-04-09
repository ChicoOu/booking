import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyngClassComponent } from './myng-class.component';

describe('MyngClassComponent', () => {
  let component: MyngClassComponent;
  let fixture: ComponentFixture<MyngClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyngClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyngClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
