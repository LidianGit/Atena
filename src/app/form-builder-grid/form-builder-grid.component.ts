import {Component, OnInit} from '@angular/core';
import {AppState, FormContainerState} from './form-builder-reducer';
import {Store} from '@ngrx/store';
import {DragulaService} from 'ng2-dragula';
import * as Rx from 'rxjs';
import {FormElementHierarchyService} from '../form-element-hierarchy.service';
import {ACTIONS} from '../form-element-actions';

@Component({
  selector: 'app-form-builder-grid',
  templateUrl: './form-builder-grid.component.html',
  styleUrls: ['./form-builder-grid.component.css']
})
export class FormBuilderGridComponent implements OnInit {

  public sideBarOpened = false;
  public formContainerState: Rx.Observable<FormContainerState>;
  private formElementHierarchyService: FormElementHierarchyService;

  constructor(private store: Store<AppState> ,
              private dragulaService: DragulaService,
              formElementHierarchyService: FormElementHierarchyService) {

    this.formElementHierarchyService = formElementHierarchyService;
    this.formContainerState = store.select('formContainerState');

  }

  ngOnInit() {
    this.initNewForm();
  }

  public initNewForm() {
    console.log('form container init new form');
    this.store.dispatch({
      type: ACTIONS.CONTAINER_ELEMENT_INIT_NEW_FORM
    });
  }

  private toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
