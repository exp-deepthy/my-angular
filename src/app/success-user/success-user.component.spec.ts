import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessUserComponent } from './success-user.component';

describe('SuccessUserComponent', () => {
  let component: SuccessUserComponent;
  let fixture: ComponentFixture<SuccessUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
