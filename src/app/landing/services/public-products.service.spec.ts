/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicProductsService } from './public-products.service';

describe('Service: PublicProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicProductsService]
    });
  });

  it('should ...', inject([PublicProductsService], (service: PublicProductsService) => {
    expect(service).toBeTruthy();
  }));
});
