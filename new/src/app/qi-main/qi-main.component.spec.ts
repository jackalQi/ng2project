import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiMainComponent } from './qi-main.component';

describe('QiMainComponent', () => {
  let component: QiMainComponent;
  let fixture: ComponentFixture<QiMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
