import { TestBed } from '@angular/core/testing';

import { VideoEditService } from './video-edit.service';

describe('VideoEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoEditService = TestBed.get(VideoEditService);
    expect(service).toBeTruthy();
  });
});
