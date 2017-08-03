/**
 * Created by Amumi on 14/07/2017.
 */
import { Action } from '@ngrx/store';
import {FormElement} from '../form-element/form-element';

export const ACTIONS = {
  ELEMENT_EDIT: 'ELEMENT_EDIT',
};

export function formContainerElementReducer(
  state: FormElement<any> = {
    id: '',
    name: '',
    type: '',
    icon: '',
    editable: false,
    deletable: false,
    editMode: false,
    data: {}
  },
  action: Action): FormElement<any> {
  switch (action.type) {
    case ACTIONS.ELEMENT_EDIT:
      const formElement: FormElement<any> = action.payload;
      formElement.editMode = true;
      return formElement;
    default:
      return state;
  }
}
