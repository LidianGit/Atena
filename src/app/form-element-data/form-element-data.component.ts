import {Component, Input, OnInit} from '@angular/core';
import {FormElementDataAttribute} from './form-element-data-attribute';

@Component({
  selector: 'app-form-element-data',
  templateUrl: './form-element-data.component.html',
  styleUrls: ['./form-element-data.component.css']
})
export class FormElementDataComponent implements OnInit {

  @Input() data: any;

  public arrayData: Array<FormElementDataAttribute> = [];

  constructor() { }

  ngOnInit() {

    if (Array.isArray(this.data)) {
      this.arrayData = this.data;
    }


  }

}
