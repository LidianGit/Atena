import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderGridComponent } from './form-builder-grid.component';
import {StoreModule} from "ngrx/@ngrx/store";

describe('FormBuilderGridComponent', () => {
  let component: FormBuilderGridComponent;
  let fixture: ComponentFixture<FormBuilderGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderGridComponent ],
      imports: [
        StoreModule.provideStore({})
      ]
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
