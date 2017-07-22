import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
// import {freelancersReducer} from "./freelancer-grid/freelancer-reducer";
import {HttpModule} from "@angular/http";
import { FormBuilderGridComponent } from './form-builder-grid/form-builder-grid.component';
import {DragulaModule} from "ng2-dragula";
import { FormElementMenuComponent } from './form-element-menu/form-element-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormElementComponent } from './form-element/form-element.component';
import {formBuilderReducer} from "./form-builder-grid/form-builder-reducer";
import {SidebarModule} from "ng-sidebar";

@NgModule({
  imports: [
    SidebarModule.forRoot(),
    DragulaModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.provideStore( { elementMenuState: formBuilderReducer} )
  ],
  declarations: [
    AppComponent,
    FormBuilderGridComponent,
    FormElementMenuComponent,
    FormElementComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
