import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuildInfoComponent } from './build-info.component';

describe('BuildInfoComponent', () => {
  let component: BuildInfoComponent;
  let fixture: ComponentFixture<BuildInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [BuildInfoComponent]
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
