import { Component, OnInit } from '@angular/core';
import {AppState} from '../form-builder-grid/form-builder-reducer';
import * as Rx from 'rxjs';
import {Store} from '@ngrx/store';
import {FormElement} from '../form-element/form-element';
import {FormElementHierarchyService} from '../form-element-hierarchy.service';

@Component({
  selector: 'app-form-component-menu',
  templateUrl: './form-element-menu.component.html',
  styleUrls: ['./form-element-menu.component.css']
})
export class FormElementMenuComponent implements OnInit {

  public formElementMenuState: Rx.Observable<Array<FormElement<any>>>;

  sidebarOptions: any = {
    accepts: function (el, target, source, sibling) {
      // return target.id == "form_builder_container" && source.id == "sidebar_container";
      return true;
    },
    copy: true
  };


  constructor( private store: Store<AppState> , formElementHierarchyService: FormElementHierarchyService) {
    this.formElementMenuState = store.select('elementMenuState');
  }

  ngOnInit() {
  }



}
