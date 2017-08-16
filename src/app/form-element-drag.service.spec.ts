import { TestBed, inject } from '@angular/core/testing';

import { FormElementDragService } from './form-element-drag.service';

describe('FormElementDragService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormElementDragService]
    });
  });

  it('should be created', inject([FormElementDragService], (service: FormElementDragService) => {
    expect(service).toBeTruthy();
  }));
});
