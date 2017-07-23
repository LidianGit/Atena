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
  showTrashCan: boolean;
}

export interface Form {
  elements: Array<FormElement>;
}

export const ACTIONS = {
  MENU_ELEMENT_DROP: 'MENU_ELEMENT_DROP',
  MENU_ELEMENT_DRAG: 'MEN_ELEMENT_DRAG',
  MENU_ELEMENT_SELECTED: 'MENU_ELEMENT_SELECTED',
  MENU_ELEMENT_REMOVED: 'MENU_ELEMENT_REMOVED',
  CONTAINER_ELEMENT_SELECTED: 'CONTAINER_ELEMENT_SELECTED',
  CONTAINER_ELEMENT_DROP: 'CONTAINER_ELEMENT_DROP',
  CONTAINER_ELEMENT_DRAG: 'CONTAINER_ELEMENT_DRAG',
  CONTAINER_ELEMENT_REMOVED: 'CONTAINER_ELEMENT_REMOVED',
};


export function formContainerReducer(
  state: FormContainerState = {
    form: {elements: []},
    selectedElement: null,
    showTrashCan: false
  },
  action: Action): FormContainerState {
  switch (action.type) {
    case ACTIONS.CONTAINER_ELEMENT_DRAG:
      return Object.assign({}, state, {showTrashCan: true});
    case ACTIONS.CONTAINER_ELEMENT_DROP:
      return Object.assign({}, state, {showTrashCan: false});
    default:
      return state;
  }
}


export function formElementMenuReducer(
  state: Array<FormElement> = [] ,
  action: Action): Array<FormElement> {
    switch (action.type) {
        case ACTIONS.CONTAINER_ELEMENT_SELECTED:
          let newElementMenuState = [];
          let fe1:FormElement = { name: "Input", type: "input", icon: 'fa-pencil-square-o' };
          let fe2:FormElement = { name: "Select", type: "select", icon: 'fa-list-ul' };
          newElementMenuState.push(fe1);
          newElementMenuState.push(fe2);
          return newElementMenuState;
        default:
          return state;
    }
}
