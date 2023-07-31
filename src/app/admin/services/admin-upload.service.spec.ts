/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminUploadService } from './admin-upload.service';

describe('Service: AdminUpload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUploadService]
    });
  });

  it('should ...', inject([AdminUploadService], (service: AdminUploadService) => {
    expect(service).toBeTruthy();
  }));
});
