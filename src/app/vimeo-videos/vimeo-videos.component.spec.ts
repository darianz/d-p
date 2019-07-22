import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoVideosComponent } from './vimeo-videos.component';

describe('VimeoVideosComponent', () => {
  let component: VimeoVideosComponent;
  let fixture: ComponentFixture<VimeoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VimeoVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VimeoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
