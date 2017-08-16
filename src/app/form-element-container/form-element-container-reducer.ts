import {FormElement} from '../form-element/form-element';
import {Action} from 'ngrx/@ngrx/store';
import {ELEMENT_TYPE_VIEW} from '../form-element-view-types';
import {FormElementContainer} from './form-element-container';
import {UUID} from 'angular2-uuid';
import {ACTIONS} from '../form-element-actions';

export function formElementContainerReducer(
  state: FormElementContainer<any> = {
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
  action: Action): FormElementContainer<any> {
  let formElementContainer: FormElementContainer<any>;
  switch (action.type) {
    case ACTIONS.CONTAINER_ELEMENT_DROP:
      formElementContainer = action.payload.formElementContainer;
      if (formElementContainer.isEmpty) {
        formElementContainer.elements = formElementContainer.elements.splice(0, 1);
        formElementContainer.isEmpty = false;
      }
      const formElementId: string = action.payload.formElementId;
      const formElement: FormElement<any> = formElementContainer.elements.find(value => value.id === formElementId );
      formElement.editable = true;
      formElement.deletable = true;
      formElement.id = UUID.UUID();
      if ( formElement.isContainer) {
        const formElementContainerChild: FormElementContainer<any> = <FormElementContainer<any>> formElement;
        formElementContainerChild.elements = [];
        formElementContainerChild.elements.push( ELEMENT_TYPE_VIEW['empty'] );
      }
      return formElementContainer;
    case ACTIONS.CONTAINER_ELEMENT_REMOVED:
      formElementContainer = action.payload.formElementContainer;
      const isEmpty: boolean = state.elements.length === 0;
      const emptyElements = [];
      emptyElements.push(ELEMENT_TYPE_VIEW['empty']);
      formElementContainer.isEmpty = isEmpty;
      formElementContainer.elements = emptyElements;
      return formElementContainer;
    default:
      return state;
  }
}
