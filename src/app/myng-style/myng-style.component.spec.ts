import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyngStyleComponent } from './myng-style.component';

describe('MyngStyleComponent', () => {
  let component: MyngStyleComponent;
  let fixture: ComponentFixture<MyngStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyngStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyngStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
