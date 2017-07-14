import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IFreelancer, ACTIONS } from './freelancer-reducer';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-freelancer-grid',
  templateUrl: './freelancer-grid.component.html',
  styleUrls: ['./freelancer-grid.component.css']
})
export class FreelancerGridComponent implements OnInit {

  public freelancers: Rx.Observable<Array<IFreelancer>>;

  constructor(private store: Store<AppState>) {
    // this.freelancers = store.select('freelancers');

    let mockFreelancer : IFreelancer = { name: "Danilo", email: "miglioredanilo@gmail.com", thumbnail: "X"};
    this.freelancers =  Rx.Observable.of([mockFreelancer]);
  }


  ngOnInit() {
  }

}
