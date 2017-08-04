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
  elements: Array<FormElement<any>>;
  hidden: boolean;
}

export interface FormContainerState {
  form: Form;
  selectedElement: FormElement<any>;
  removedElements: Array<FormElement<any>>;
  showTrashCan: boolean;
}

export interface Form {
  elements: Array<FormElement<any>>;
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
  input : { id: '',
            name: 'Input',
            type: 'input',
            icon: 'fa-pencil-square-o',
            editable: false,
            deletable: false,
            editMode: false,
            data: [
              {type: 'input', key: 'name',  value: 'Default value' },
              {type: 'input', key: 'disabled',  value: 'Default value 2' }
            ]},
  select : {
            id: '',
            name: 'Select',
            type: 'select',
            icon: 'fa-list-ul',
            editable: false,
            deletable: false,
            editMode: false,
            data: [
              {type: 'input', key: 'name',  value: 'default value' },
              {type: 'input', key: 'disabled',  value: 'false' },
              {type: 'input', key: 'allowedValues',  value: ''}
            ]}
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
      const formElementId: string = action.payload;
      const formElement: FormElement<any> = state.form.elements.find(value => value.id === formElementId );
      formElement.editable = true;
      formElement.deletable = true;
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
  state: Array<FormElement<any>> = [] ,
  action: Action): Array<FormElement<any>> {
    switch (action.type) {
        case ACTIONS.CONTAINER_ELEMENT_SELECTED:
          const newElementMenuState = [];
          const fe1: FormElement<any> = ELEMENT_TYPE_VIEW['input'];
          const fe2: FormElement<any> = ELEMENT_TYPE_VIEW['select'];
          newElementMenuState.push(fe1);
          newElementMenuState.push(fe2);
          return newElementMenuState;
        default:
          return state;
    }
}
