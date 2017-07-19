/**
 * Created by Amumi on 14/07/2017.
 */
import { Action } from '@ngrx/store';

export interface AppState {
  formContainerState: FormContainerState;
  componentContainerState: ComponentContainerState;
}

export interface ComponentContainerState {
  components: FormComponent;
  hidden: boolean;
}

export interface FormContainerState {
  form: Form;
  selectedComponent: FormComponent;
}

export interface Form {
  components: FormComponent;
}

export interface FormComponent {
  name: string;
  mandatory: boolean;
}

export const ACTIONS = {
  COMPONENT_DROP: 'COMPONENT_DROP',
  COMPONENT_DRAG: 'COMPONENT_DRAG',
  COMPONENT_SELECTED: 'COMPONENT_SELECTED',
  COMPONENT_REMOVED: 'COMPONENT_REMOVED',
};

export function formBuilderReducer(state: AppState , action: Action): AppState {
    return state;
}

// export function formBuilderReducer(
//   // state: Array<IFreelancer> = [],
//   // action: Action): Array<IFreelancer> {
//   // switch (action.type) {
//   //   case ACTIONS.INCOMING_DATA:
//   //     action.payload.DELETE.forEach((index) => {
//   //       state.splice(state.indexOf(action.payload), 1);
//   //     })
//   //     return Array.prototype.concat(action.payload.ADD, state);
//   //   case ACTIONS.FREELANCERS_LOADED:
//   //     // Return the new state with the payload as freelancers list
//   //     return Array.prototype.concat(action.payload);
//   //   case ACTIONS.DELETE_FREELANCER:
//   //     // Remove the element from the array
//   //     state.splice(state.indexOf(action.payload), 1);
//   //     // We need to create another reference
//   //     return Array.prototype.concat(state);
//   //   default:
//   //     return state;
//   }
// }
