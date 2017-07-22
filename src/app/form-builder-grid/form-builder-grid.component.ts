import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import {ACTIONS, AppState, FormContainerState, FormElementMenuState} from "./form-builder-reducer";
import * as Rx from 'rxjs';
import {Store} from "@ngrx/store";
import {FormElement} from "../form-element/form-element";

@Component({
  selector: 'app-form-builder-grid',
  templateUrl: './form-builder-grid.component.html',
  styleUrls: ['./form-builder-grid.component.css']
  // animations: [
  // trigger('slideInOut', [
  //   state('in', style({
  //     transform: 'translate3d(0, 0, 0)'
  //   })),
  //   state('out', style({
  //     transform: 'translate3d(100%, 0, 0)'
  //   })),
  //   transition('in => out', animate('400ms ease-in-out')),
  //   transition('out => in', animate('400ms ease-in-out'))
  // ])
// ]
})
export class FormBuilderGridComponent implements OnInit {

  public sideBarOpened: boolean = false;
  // public appState: Rx.Observable<AppState>;

  // constructor() {

  constructor(private store: Store<AppState> ) {
    // this.appState = store.select('appState');
  }

  ngOnInit() {
  }

  private toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
  }

  emptyContainer() : boolean {
    return true;
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
      return ( target.id == "form_builder_container_empty" || target.id == "form_builder_container" ) && source.id == "sidebar_container";
    },
    copy: true
  }

  // containerOptions: any = {
  //
  //     accepts: function (el, target, source, sibling) {
  //       return true;
  //     },
  //
  //   // accepts: function (el, target, source, sibling) {
  //   //   return true; // elements can be dropped in any of the `containers` by default
  //   // },
  //   moves: function (el, source, handle, sibling) {
  //     return false; // elements are always draggable by default
  //   },
  //   copy: false,
  //   isContainer: function (el) {
  //     return true; // only elements in drake.containers will be taken into account
  //   }
  // }


}
