/**
 * Created by Amumi on 14/07/2017.
 */
import { Action } from '@ngrx/store';
import {FormElement} from '../form-element/form-element';
import {FormElementContainer} from '../form-element-container/form-element-container';
import {ELEMENT_TYPE_VIEW} from '../form-element-view-types';
import {ACTIONS} from '../form-element-actions';

export interface AppState {
  formContainerState: FormContainerState;
  elementMenuState: FormElementMenuState;
}

export interface FormElementMenuState {
  elements: Array<FormElement<any>>;
  hidden: boolean;
}

export interface FormContainerState {
  form: FormElementContainer<any>;
  selectedElement: FormElement<any>;
  removedElements: Array<FormElement<any>>;
  showTrashCan: boolean;
}

export function formContainerStateReducer(
  state: FormContainerState = {
    form: {
      id: '',
      name: '',
      type: '',
      icon: '',
      editable: false,
      deletable: false,
      editMode: false,
      isContainer: true,
      isEmpty: true,
      selected: false,
      elements: [],
      data: []
    },
    selectedElement: null,
    removedElements: [],
    showTrashCan: false
  },
  action: Action): FormContainerState {
  switch (action.type) {
    case ACTIONS.CONTAINER_ELEMENT_SELECTED:
      if ( state.selectedElement != null) {
        state.selectedElement.selected = false;
      }
      const formSelectedElement: FormElement<any> = action.payload.formElement;
      formSelectedElement.selected = true;
      return Object.assign({}, state, {selectedElement: formSelectedElement});
    case ACTIONS.CONTAINER_ELEMENT_INIT_NEW_FORM:
      const newForm: FormElementContainer<any> = newFormContainerElement('form');
      newForm.id = 'root';
      // newForm.selected = true;
      return Object.assign({}, state, {form: newForm});
    case ACTIONS.CONTAINER_ELEMENT_REMOVED:
      const removedElements = [];
      return Object.assign({}, state, {showTrashCan: false}, {removedElements: removedElements});
    case ACTIONS.CONTAINER_ELEMENT_DRAG:
      return Object.assign({}, state, {showTrashCan: true});
    case ACTIONS.CONTAINER_ELEMENT_DRAG_CANCEL:
      return Object.assign({}, state, {showTrashCan: false});
    case ACTIONS.CONTAINER_ELEMENT_DROP:
      return Object.assign({}, state, {showTrashCan: false});
    default:
      return state;
  }
}

export function newFormContainerElement( elementType: string) {
  const newContainer: FormElementContainer<any> = ELEMENT_TYPE_VIEW['form'];
  newContainer.elements.push( ELEMENT_TYPE_VIEW['empty'] );
  return newContainer;
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
      const allowedFormElementTypes: Array<string> = action.payload.allowedChildren;

      // TODO move to directive?
      // retrieveConfigByType( formElementType );
      const newElementMenuState = [];
      allowedFormElementTypes.forEach( (formElementType, index) => {
        const fe: FormElement<any> = ELEMENT_TYPE_VIEW[formElementType];
        fe.id = '' + index;
        newElementMenuState.push(fe);
      });
      return newElementMenuState;
    default:
      return state;
  }
}
