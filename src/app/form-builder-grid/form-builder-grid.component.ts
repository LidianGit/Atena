import {Component, OnInit} from "@angular/core";
import {ACTIONS, AppState, FormContainerState} from "./form-builder-reducer";
import {Store} from "@ngrx/store";
import {FormElement} from "../form-element/form-element";
import {DragulaService} from "ng2-dragula";
import * as Rx from 'rxjs';

@Component({
  selector: 'app-form-builder-grid',
  templateUrl: './form-builder-grid.component.html',
  styleUrls: ['./form-builder-grid.component.css']
})
export class FormBuilderGridComponent implements OnInit {

  public sideBarOpened: boolean = false;
  public formContainerState: Rx.Observable<FormContainerState>;

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
    this.formContainerState = store.select('formContainerState');
  }

  ngOnInit() {
  }

  private onDrag(args) {
    console.log("on drag");
    let [e, el] = args;


    this.formContainerElementDrag(null);
  }

  private onDrop(args) {
    let [e, target, source] = args;
    if( target.id == "removedElementContainer" && source.id == "formContainer"){
      console.log("on remove element");
      let bagItems = this.dragulaService.find('bag-items');
      bagItems.drake.remove();
      this.formContainerElementRemoved(null);
    }else if ( target.id == "formContainer" && source.id == "sidebarContainer" ){
      console.log("on drop element");
      this.formContainerElementDrop(null);
    }
  }

  private onOver(args) {
    console.log("on over");
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    console.log("on out");
    let [e, el, container] = args;
    // do something
  }

  private toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
  }


  public formContainerElementRemoved(formElement : FormElement) {
    console.log("form element remove dispatch");
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_REMOVED,
      payload: formElement,
    })
  }

  public formContainerElementDrag(formElement : FormElement) {
    console.log("form element drag dispatch");
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DRAG,
      payload: formElement,
    })
  }

  public formContainerElementDrop(formElement : FormElement) {
    console.log("form element drag dispatch");
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_DROP,
      payload: formElement,
    })
  }

  public containerElementSelected(formElement : FormElement) {
    console.log("form element selected event dispatch");
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_SELECTED,
      payload: formElement,
    })
  }

  itemsOptions: any = {
    accepts: function (el, target, source, sibling) {
      let sideBarToForm: boolean = ( target.id == "formContainer" && source.id == "sidebarContainer" );
      let formToTrash: boolean = ( target.id == "removedElementContainer" && source.id == "formContainer" );
      return sideBarToForm || formToTrash;
    },
    copy: function (el, source) {
      return source.id == "sidebarContainer";
    }
  }

}
