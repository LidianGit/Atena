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
import {formElementMenuReducer, formContainerReducer} from './form-builder-grid/form-builder-reducer';
import {SidebarModule} from 'ng-sidebar';
import {ButtonModule, ConfirmDialogModule, DialogModule, InputTextModule} from 'primeng/primeng';
import {formContainerElementReducer} from './form-element/form-element-reducer';
import { FormElementDataComponent } from './form-element-data/form-element-data.component';

@NgModule({
  imports: [
    SidebarModule.forRoot(),
    DragulaModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.provideStore( { elementMenuState: formElementMenuReducer,
                                        formContainerState: formContainerReducer,
                                        formContainerElementState: formContainerElementReducer } ),
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule
  ],
  declarations: [
    AppComponent,
    FormBuilderGridComponent,
    FormElementMenuComponent,
    FormElementComponent,
    FormElementDataComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
