/**
 * Created by Amumi on 14/07/2017.
 */
import { Action } from '@ngrx/store';
import {FormElement} from "../form-element/form-element";

export interface AppState {
  formContainerState: FormContainerState;
  elementMenuState: FormElementMenuState;
}

export interface FormElementMenuState {
  elements: Array<FormElement>;
  hidden: boolean;
}

export interface FormContainerState {
  form: Form;
  selectedElement: FormElement;
}

export interface Form {
  elements: Array<FormElement>;
}

export const ACTIONS = {
  MENU_ELEMENT_DROP: 'ELEMENT_DROP',
  MENU_ELEMENT_DRAG: 'ELEMENT_DRAG',
  MENU_ELEMENT_SELECTED: 'ELEMENT_SELECTED',
  MENU_ELEMENT_REMOVED: 'ELEMENT_REMOVED',
  CONTAINER_ELEMENT_SELECTED: 'CONTAINER_ELEMENT_SELECTED'
};

export function formBuilderReducer(
  // state: AppState = { elementMenuState: { elements: [], hidden: true} },
  state: Array<FormElement> = [] ,
  action: Action): Array<FormElement> {
    switch (action.type) {
        case ACTIONS.CONTAINER_ELEMENT_SELECTED:
          let newElementMenuState = [];
          let fe1:FormElement = { name: "Input", type: "input", icon: 'fa-pencil-square-o' };
          let fe2:FormElement = { name: "Select", type: "select", icon: 'fa-list-ul' };
          newElementMenuState.push(fe1);
          newElementMenuState.push(fe2);
          // return Object.assign({}, state, {elementMenuState: newElementMenuState});
          return newElementMenuState;
          // return Object.assign({}, state, newElementMenuState);

        default:
          return state;
    }
}
