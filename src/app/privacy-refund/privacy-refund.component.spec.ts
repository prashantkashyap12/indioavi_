import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyRefundComponent } from './privacy-refund.component';

describe('PrivacyRefundComponent', () => {
  let component: PrivacyRefundComponent;
  let fixture: ComponentFixture<PrivacyRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyRefundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
