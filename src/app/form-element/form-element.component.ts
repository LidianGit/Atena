import {Component, Input, OnInit} from '@angular/core';
import {FormElement} from './form-element';
import {Store} from '@ngrx/store';
import {ACTIONS} from './form-element-reducer';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  @Input() formElement: FormElement<any>;
  @Input() view: string;

  constructor( private store: Store<FormElement<any>> ) {
  }

  ngOnInit() {
  }

  public editElement() {
    this.store.dispatch({
      type: ACTIONS.ELEMENT_EDIT,
      payload: this.formElement
    });
  }

  public submitEdit() {
    this.store.dispatch({
      type: ACTIONS.ELEMENT_EDIT_SUBMIT,
      payload: this.formElement
    });
  }

}
