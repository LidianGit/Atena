import {Component, OnInit} from '@angular/core';
import {ACTIONS, AppState, FormContainerState} from './form-builder-reducer';
import {Store} from '@ngrx/store';
import {FormElement} from '../form-element/form-element';
import {DragulaService} from 'ng2-dragula';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-form-builder-grid',
  templateUrl: './form-builder-grid.component.html',
  styleUrls: ['./form-builder-grid.component.css']
})
export class FormBuilderGridComponent implements OnInit {

  public sideBarOpened = false;
  public formContainerState: Rx.Observable<FormContainerState>;

  public itemsOptions: any = {
    accepts: function (el, target, source, sibling) {
      const sideBarToForm: boolean = ( target.id === 'formContainer' && source.id === 'sidebarContainer' );
      const formToTrash: boolean = ( target.id === 'removedElementContainer' && source.id === 'formContainer' );
      return sideBarToForm || formToTrash;
    },
    copy: function (el, source) {
      return source.id === 'sidebarContainer';
    }
  };

  constructor(private store: Store<AppState> , private dragulaService: DragulaService) {

    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
    dragulaService.cancel.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onCancel(value.slice(1));
    });
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
    this.formContainerState = store.select('formContainerState');
  }

  ngOnInit() {
  }

  private onDrag(args) {
    const [e, source] = args;
    if( source.id === 'formContainer' ) {
      this.formContainerElementDrag(null);
    }
  }

  private onDrop(args) {
    const [e, target, source] = args;
    const formElementType: string = e.firstElementChild.firstElementChild.getAttribute('data-form-element-type');
    const formElementSourceIndex: number = Number( e.firstElementChild.firstElementChild.getAttribute('data-form-element-index') );
    if ( target != null ) {
      if ( target.id === 'removedElementContainer' && source.id === 'formContainer')  {
        console.log('on remove element');
        // const bagItems = this.dragulaService.find('bag-items');
        // bagItems.drake.remove();
        this.formContainerElementRemoved(formElementType, formElementSourceIndex);
      }else if ( target.id === 'formContainer' && source.id === 'sidebarContainer' ) {
        console.log('on drop element');
        // const bagItems = this.dragulaService.find('bag-items');
        // bagItems.drake.remove();
        this.formContainerElementDrop(formElementType, formElementSourceIndex);
      }
    }
  }

  private onOver(args) {
    console.log('on over');
    const [e, el, container] = args;
  }

  private onOut(args) {
    console.log('on out');
    const [e, el, container] = args;
  }

  private onCancel(args) {
    console.log('on cancel');
    const [e, el, container] = args;
    this.formContainerElementCancelDrag();
  }

  private onDropModel(args) {
    const [el, target, source] = args;
    console.log('on drop model', args);
  }

  private onRemoveModel(args) {
    const [el, source] = args;
    console.log('on remove model', args);
  }

  public formContainerElementRemoved(formElementType: string, formElementSourceIndex: number) {
    console.log('form container element remove dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_REMOVED,
      payload: formElementSourceIndex,
    });
  }

  public formContainerElementDrag(formElementType: string) {
    console.log('form container element drag dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DRAG,
      payload: formElementType,
    });
  }

  public formContainerElementDrop(formElementType: string, formElementSourceIndex: number) {
    console.log('form container element drag dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DROP,
      payload: formElementType,
    });
  }

  public formContainerElementSelected(formElementType: string) {
    console.log('form container element selected event dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_SELECTED,
      payload: formElementType,
    });
  }

  public formContainerElementCancelDrag() {
    console.log('form container element drag cancel dispatch');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DRAG_CANCEL
    });
  }

  private toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
