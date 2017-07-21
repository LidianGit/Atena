import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementMenuComponent } from './form-element-menu.component';
import {StoreModule} from "ngrx/@ngrx/store";

describe('FormElementMenuComponent', () => {
  let component: FormElementMenuComponent;
  let fixture: ComponentFixture<FormElementMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElementMenuComponent ],
      imports: [
        StoreModule.provideStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
