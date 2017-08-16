import {Component, Input, OnInit} from '@angular/core';
import {FormElementHierarchyService} from '../form-element-hierarchy.service';
import {Store} from '@ngrx/store';
import {AppState} from '../form-builder-grid/form-builder-reducer';
import {FormElementContainer} from './form-element-container';
import {FormElement} from '../form-element/form-element';
import {ACTIONS} from '../form-element-actions';
import {FormElementDragService} from '../form-element-drag.service';
import {FormDragDropContainer} from '../form-drag-drop-container';

@Component({
  selector: 'app-form-element-container',
  templateUrl: './form-element-container.component.html',
  styleUrls: ['./form-element-container.component.css']
})
export class FormElementContainerComponent implements OnInit, FormDragDropContainer {

  @Input() formElementContainer: FormElementContainer<any>;

  public itemsOptions: any;

  constructor(private store: Store<AppState> ,
              private formElementHierarchyService: FormElementHierarchyService,
              private formElementDragService: FormElementDragService) {
    this.itemsOptions = formElementDragService.itemsOptions;
  }

  ngOnInit() {
  }

  public onDrag(args) {
    const [e, source] = args;
    if ( source.id === 'sidebarContainer' ) {
      console.log('id is:', e.firstElementChild.dataset.id);
    }
    if ( source.id === 'formContainer' ) {
      this.formElementDrag(null);
    }
  }

  public onDrop(args) {
    const [e, target, source] = args;
    if ( target != null ) {
      if ( target.id === 'removedElementContainer' && source.id.startsWith('formContainer', 0))  {
        console.log('on remove element {}', e.firstElementChild.dataset.id);
        this.formElementRemoved(e.firstElementChild.dataset.id);
      }else if ( target.id.startsWith('formContainer', 0) && source.id === 'sidebarContainer' ) {
        console.log('on drop element {}', e.firstElementChild.dataset.id);
        this.formElementDrop(e.firstElementChild.dataset.id);
      }
    }
  }

  public onOver(args) {
    console.log('on over');
    const [e, el, container] = args;
  }

  public onOut(args) {
    console.log('on out');
    const [e, el, container] = args;
  }

  public onCancel(args) {
    console.log('on cancel');
    const [e, el, container] = args;
    this.formElementCancelDrag();
  }

  public onDropModel(args) {
    const [el, target, source] = args;
    console.log('on drop model', args);
  }

  public onRemoveModel(args) {
    const [el, source] = args;
    console.log('on remove model', args);
  }

  public formElementRemoved(formElementId: string) {
    console.log('form container element remove dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_REMOVED,
      payload: {
        formElementId: formElementId,
        formElementContainer: this.formElementContainer
      }
    });
  }

  public formElementDrag(formElementId: string) {
    console.log('form container element drag dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DRAG,
      payload: formElementId,
    });
  }

  public formElementDrop(formElementId: string) {
    console.log('form container element drag dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DROP,
      payload: {
        formElementId: formElementId,
        formElementContainer: this.formElementContainer
      }
    });
  }

  public formElementSelected(formElement: FormElement<any>, $event) {
    $event.stopPropagation();
    console.log('form container element selected event dispatch');
    this.formElementDragService.initDragDropService( this );
    const allowedChildren: Array<string> = this.formElementHierarchyService.retrieveAllowedChildren( formElement.type );
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_SELECTED,
      payload: {
        formElement: formElement,
        allowedChildren: allowedChildren
      }
    });
  }

  public formElementCancelDrag() {
    console.log('form container element drag cancel dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DRAG_CANCEL
    });
  }

}
