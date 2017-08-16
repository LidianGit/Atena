import { Injectable } from '@angular/core';

@Injectable()
export class FormElementHierarchyService {

  constructor() { }

  public retrieveAllowedChildren( formElementType: string ): Array<string> {
      const allowedChildrens: Array<string> = [];

      switch (formElementType) {
        case 'form':
          allowedChildrens.push('step');
          break;
        case 'step':
          allowedChildrens.push('input');
          allowedChildrens.push('select');
          break;
        default:
          allowedChildrens.push('step');
      }

      return allowedChildrens;
  }


}
