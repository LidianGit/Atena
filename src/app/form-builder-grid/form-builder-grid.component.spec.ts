import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderGridComponent } from './form-builder-grid.component';

describe('FormBuilderGridComponent', () => {
  let component: FormBuilderGridComponent;
  let fixture: ComponentFixture<FormBuilderGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
