import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPopComponent } from './register-pop.component';

describe('RegisterPopComponent', () => {
  let component: RegisterPopComponent;
  let fixture: ComponentFixture<RegisterPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
