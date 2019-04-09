import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyngIfComponent } from './myng-if.component';

describe('MyngIfComponent', () => {
  let component: MyngIfComponent;
  let fixture: ComponentFixture<MyngIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyngIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyngIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
