import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';

import {HttpModule} from '@angular/http';
import { FormBuilderGridComponent } from './form-builder-grid/form-builder-grid.component';
import {DragulaModule} from 'ng2-dragula';
import { FormElementMenuComponent } from './form-element-menu/form-element-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormElementComponent } from './form-element/form-element.component';
import {formContainerStateReducer, formElementMenuReducer} from './form-builder-grid/form-builder-reducer';
import {SidebarModule} from 'ng-sidebar';
import {ButtonModule, ConfirmDialogModule, DialogModule, InputTextModule} from 'primeng/primeng';
import {formElementReducer} from './form-element/form-element-reducer';
import { FormElementDataComponent } from './form-element-data/form-element-data.component';
import {FormElementHierarchyService} from './form-element-hierarchy.service';
import { FormElementContainerComponent } from './form-element-container/form-element-container.component';
import {formElementContainerReducer} from './form-element-container/form-element-container-reducer';
import {FormElementDragService} from './form-element-drag.service';
import {FormsModule, NgModel} from '@angular/forms';

@NgModule({
  imports: [
    SidebarModule.forRoot(),
    DragulaModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.provideStore( { elementMenuState: formElementMenuReducer,
                                        formContainerState: formContainerStateReducer,
                                        formElementContainerReducer: formElementContainerReducer,
                                        formElementState: formElementReducer } ),
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FormBuilderGridComponent,
    FormElementMenuComponent,
    FormElementComponent,
    FormElementDataComponent,
    FormElementContainerComponent
  ],
  bootstrap: [AppComponent],
  providers: [ FormElementHierarchyService, FormElementDragService ],
})
export class AppModule { }
