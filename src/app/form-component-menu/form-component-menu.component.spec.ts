import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentMenuComponent } from './form-component-menu.component';

describe('FormComponentMenuComponent', () => {
  let component: FormComponentMenuComponent;
  let fixture: ComponentFixture<FormComponentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
