import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalDialogComponent } from './arrival.dialog.component';

describe('ArrivalDialogComponent', () => {
  let component: ArrivalDialogComponent;
  let fixture: ComponentFixture<ArrivalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrivalDialogComponent]
    });
    fixture = TestBed.createComponent(ArrivalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
