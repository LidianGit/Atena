import { Injectable } from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {FormDragDropContainer} from './form-drag-drop-container';

@Injectable()
export class FormElementDragService {

  private initialized = false;
  private drag;
  private drop;
  private over;
  private out;
  private cancel;
  private dropModel;
  private removeModel;

  constructor(private dragulaService: DragulaService)  {}

  public itemsOptions: any = {
    accepts: function (el, target, source, sibling) {
      const sideBarToForm: boolean = ( target.id.startsWith('formContainer', 0)
        && target.dataset.selected === 'true'
        && source.id === 'sidebarContainer' );
      const formToTrash: boolean = ( target.id === 'removedElementContainer'
        && source.dataset.selected === 'true'
        && source.id.startsWith('formContainer', 0) );
      return sideBarToForm || formToTrash;
    },
    copy: function (el, source) {
      return source.id === 'sidebarContainer';
    }
  };


  private unsubscribeDragulaServiceEvents() {
    this.drag.unsubscribe();
    this.drop.unsubscribe();
    this.over.unsubscribe();
    this.out.unsubscribe();
    this.cancel.unsubscribe();
    this.dropModel.unsubscribe();
    this.removeModel.unsubscribe();
  }

  public initDragDropService( container: FormDragDropContainer ) {
    if ( this.initialized ) {
      this.unsubscribeDragulaServiceEvents();
    }
    this.initialized = true;
    this.drag = this.dragulaService.drag.subscribe((value) => {
      container.onDrag(value.slice(1));
    });
    this.drop = this.dragulaService.drop.subscribe((value) => {
      container.onDrop(value.slice(1));
    });
    this.over = this.dragulaService.over.subscribe((value) => {
      container.onOver(value.slice(1));
    });
    this.out = this.dragulaService.out.subscribe((value) => {
      container.onOut(value.slice(1));
    });
    this.cancel = this.dragulaService.cancel.subscribe((value) => {
      container.onCancel(value.slice(1));
    });
    this.dropModel = this.dragulaService.dropModel.subscribe((value) => {
      container.onDropModel(value.slice(1));
    });
    this.removeModel = this.dragulaService.removeModel.subscribe((value) => {
      container.onRemoveModel(value.slice(1));
    });
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

}
