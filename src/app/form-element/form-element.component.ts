import {Component, Input, OnInit} from '@angular/core';
import {FormElement} from "./form-element";

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() element: FormElement;

}
