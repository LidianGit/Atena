import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder-grid',
  templateUrl: './form-builder-grid.component.html',
  styleUrls: ['./form-builder-grid.component.css']
})
export class FormBuilderGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
