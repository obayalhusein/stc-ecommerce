/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminCategoriesService } from './admin-categories.service';

describe('Service: AdminCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCategoriesService]
    });
  });

  it('should ...', inject([AdminCategoriesService], (service: AdminCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
