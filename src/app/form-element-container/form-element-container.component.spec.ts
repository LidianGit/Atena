import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementContainerComponent } from './form-element-container.component';

describe('FormElementContainerComponent', () => {
  let component: FormElementContainerComponent;
  let fixture: ComponentFixture<FormElementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
