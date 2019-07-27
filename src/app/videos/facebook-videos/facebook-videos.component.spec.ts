import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookVideosComponent } from './facebook-videos.component';

describe('FacebookVideosComponent', () => {
  let component: FacebookVideosComponent;
  let fixture: ComponentFixture<FacebookVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
