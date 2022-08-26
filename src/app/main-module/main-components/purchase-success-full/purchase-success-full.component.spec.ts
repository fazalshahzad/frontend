import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSuccessFullComponent } from './purchase-success-full.component';

describe('PurchaseSuccessFullComponent', () => {
  let component: PurchaseSuccessFullComponent;
  let fixture: ComponentFixture<PurchaseSuccessFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSuccessFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSuccessFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
