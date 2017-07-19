import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-form-builder-grid',
  templateUrl: './form-builder-grid.component.html',
  styleUrls: ['./form-builder-grid.component.css'],
  animations: [
  trigger('slideInOut', [
    state('in', style({
      transform: 'translate3d(0, 0, 0)'
    })),
    state('out', style({
      transform: 'translate3d(100%, 0, 0)'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ])
]
})
export class FormBuilderGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuState:string = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }


  emptyContainer() : boolean {
    return true;
  }


  sidebarOptions: any = {
    accepts: function (el, target, source, sibling) {
      return ( target.id == "form_builder_container_empty" || target.id == "form_builder_container" ) && source.id == "sidebar_container";
    },
    copy: true
  }

  containerOptions: any = {
    // accepts: function (el, target, source, sibling) {
    //   return true; // elements can be dropped in any of the `containers` by default
    // },
    moves: function (el, source, handle, sibling) {
      return false; // elements are always draggable by default
    },
    copy: false
  }


}
