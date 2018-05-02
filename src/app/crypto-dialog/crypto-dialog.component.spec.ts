import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDialogComponent } from './crypto-dialog.component';

describe('CryptoDialogComponent', () => {
  let component: CryptoDialogComponent;
  let fixture: ComponentFixture<CryptoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
