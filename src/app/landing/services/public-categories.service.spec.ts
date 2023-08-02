/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicCategoriesService } from './public-categories.service';

describe('Service: PublicCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicCategoriesService]
    });
  });

  it('should ...', inject([PublicCategoriesService], (service: PublicCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
