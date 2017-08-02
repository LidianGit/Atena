/**
 * Created by Amumi on 14/07/2017.
 */
import { Action } from '@ngrx/store';
import {FormElement} from '../form-element/form-element';

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
  removedElements: Array<FormElement>;
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
  CONTAINER_ELEMENT_DRAG_CANCEL: 'CONTAINER_ELEMENT_DRAG_CANCEL',
  CONTAINER_ELEMENT_REMOVED: 'CONTAINER_ELEMENT_REMOVED',
};

export const ELEMENT_TYPE_VIEW = {
  input : { name: 'Input', type: 'input', icon: 'fa-pencil-square-o' },
  select : { name: 'Select', type: 'select', icon: 'fa-list-ul' }
};

export function formContainerReducer(
  state: FormContainerState = {
    form: {elements: []},
    selectedElement: null,
    removedElements: [],
    showTrashCan: false
  },
  action: Action): FormContainerState {
  switch (action.type) {
    case ACTIONS.CONTAINER_ELEMENT_DRAG:
      return Object.assign({}, state, {showTrashCan: true});
    case ACTIONS.CONTAINER_ELEMENT_DRAG_CANCEL:
      return Object.assign({}, state, {showTrashCan: false});
    case ACTIONS.CONTAINER_ELEMENT_DROP:
      return Object.assign({}, state, {showTrashCan: false});
    case ACTIONS.CONTAINER_ELEMENT_REMOVED:
      const removedElements = [];
      return Object.assign({}, state, {showTrashCan: false}, {removedElements: removedElements});
    default:
      return state;
  }
}

export function recreateFormState(state: FormContainerState) {
  const newFormContainerElements = Array.prototype.concat(state.form.elements);
  const form = Object.assign({}, state.form, {elements: newFormContainerElements});
  return form;
}


export function formElementMenuReducer(
  state: Array<FormElement> = [] ,
  action: Action): Array<FormElement> {
    switch (action.type) {
        case ACTIONS.CONTAINER_ELEMENT_SELECTED:
          const newElementMenuState = [];
          const fe1: FormElement = ELEMENT_TYPE_VIEW['input'];
          const fe2: FormElement = ELEMENT_TYPE_VIEW['select'];
          newElementMenuState.push(fe1);
          newElementMenuState.push(fe2);
          return newElementMenuState;
        default:
          return state;
    }
}
