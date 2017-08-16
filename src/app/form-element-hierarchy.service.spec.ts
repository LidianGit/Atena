import { TestBed, inject } from '@angular/core/testing';

import { FormElementHierarchyService } from './form-element-hierarchy.service';

describe('FormElementHierarchyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormElementHierarchyService]
    });
  });

  it('should be created', inject([FormElementHierarchyService], (service: FormElementHierarchyService) => {
    expect(service).toBeTruthy();
  }));
});
