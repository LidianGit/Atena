import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component-menu',
  templateUrl: './form-component-menu.component.html',
  styleUrls: ['./form-component-menu.component.css']
})
export class FormComponentMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarOptions: any = {
    accepts: function (el, target, source, sibling) {
      return target.id == "form_builder_container" && source.id == "sidebar_container";
    },
    copy: true
  }

}
