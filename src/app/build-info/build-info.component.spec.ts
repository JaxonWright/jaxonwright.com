import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInfoComponent } from './build-info.component';

describe('BuildInfoComponent', () => {
  let component: BuildInfoComponent;
  let fixture: ComponentFixture<BuildInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
