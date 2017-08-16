import {FormElement} from '../form-element/form-element';

export interface FormElementContainer<T> extends FormElement<T> {
  elements: Array<FormElement<any>>;
  isEmpty: boolean;
}
