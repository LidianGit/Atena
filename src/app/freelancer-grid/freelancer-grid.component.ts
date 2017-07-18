import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IFreelancer, ACTIONS } from './freelancer-reducer';
import * as Rx from 'rxjs';
import {FreelancerService} from "../freelancer.service";

@Component({
  selector: 'freelancer-grid',
  templateUrl: './freelancer-grid.component.html',
  styleUrls: ['./freelancer-grid.component.css']
})
export class FreelancerGridComponent implements OnInit {

  public freelancers: Rx.Observable<Array<IFreelancer>>;

  constructor( private store: Store<AppState>, private service: FreelancerService) {
    this.freelancers = store.select('freelancers');
   // / let mockFreelancer : IFreelancer = { name: "Danilo", email: "miglioredanilo@gmail.com", thumbnail: "X"};
   //  this.freelancers =  Rx.Observable.of([mockFreelancer]);
  }

  ngOnInit() {
  }

  public delete(freelancer : IFreelancer) {
    console.log("deleting freelancer from store");
    this.store.dispatch({
      type: ACTIONS.DELETE_FREELANCER,
      payload: freelancer,
    })
  }


  public loadFreelancers() {
    console.log("launched loading freelancers from service");
    this.service.run();
  }


}
