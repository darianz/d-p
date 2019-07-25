import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerHandelerComponent } from './server-handeler.component';

describe('ServerHandelerComponent', () => {
  let component: ServerHandelerComponent;
  let fixture: ComponentFixture<ServerHandelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerHandelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerHandelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
