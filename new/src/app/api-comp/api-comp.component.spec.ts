import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCompComponent } from './api-comp.component';

describe('ApiCompComponent', () => {
  let component: ApiCompComponent;
  let fixture: ComponentFixture<ApiCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
