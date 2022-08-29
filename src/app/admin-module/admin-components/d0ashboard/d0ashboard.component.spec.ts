import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D0ashboardComponent } from './d0ashboard.component';

describe('D0ashboardComponent', () => {
  let component: D0ashboardComponent;
  let fixture: ComponentFixture<D0ashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D0ashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D0ashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
