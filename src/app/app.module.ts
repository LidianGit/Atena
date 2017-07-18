import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FreelancerGridComponent } from './freelancer-grid/freelancer-grid.component';
import {StoreModule} from "@ngrx/store";
import {freelancersReducer} from "./freelancer-grid/freelancer-reducer";
import {FreelancerService} from "./freelancer.service";
import {HttpModule} from "@angular/http";
import { FormBuilderGridComponent } from './form-builder-grid/form-builder-grid.component';

@NgModule({
  imports: [
    StoreModule.provideStore( { freelancers: freelancersReducer} ),
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FreelancerGridComponent,
    FormBuilderGridComponent
  ],
  bootstrap: [AppComponent],
  providers: [ FreelancerService ],
})
export class AppModule { }
