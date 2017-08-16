/**
 * Created by Amumi on 14/07/2017.
 */
import { Action } from '@ngrx/store';
import {FormElement} from '../form-element/form-element';

export const ACTIONS = {
  ELEMENT_EDIT: 'ELEMENT_EDIT',
  ELEMENT_EDIT_SUBMIT: 'ELEMENT_EDIT_SUBMIT',
};

export function formElementReducer(
  state: FormElement<any> = {
    id: '',
    name: '',
    type: '',
    icon: '',
    editable: false,
    deletable: false,
    editMode: false,
    isContainer: false,
    selected: false,
    data: {}
  },
  action: Action): FormElement<any> {
  const formElement: FormElement<any> = action.payload;
  switch (action.type) {
    case ACTIONS.ELEMENT_EDIT:
      formElement.editMode = true;
      return formElement;
    case ACTIONS.ELEMENT_EDIT_SUBMIT:
      formElement.editMode = false;
      return formElement;
    default:
      return state;
  }
}
