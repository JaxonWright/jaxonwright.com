import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltronComponent } from './ultron.component';

describe('UltronComponent', () => {
  let component: UltronComponent;
  let fixture: ComponentFixture<UltronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
