import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyungBaeSearchComponent } from './kyung-bae-search.component';

describe('KyungBaeSearchComponent', () => {
  let component: KyungBaeSearchComponent;
  let fixture: ComponentFixture<KyungBaeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyungBaeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyungBaeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
