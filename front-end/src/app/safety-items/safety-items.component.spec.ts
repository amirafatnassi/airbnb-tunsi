import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyItemsComponent } from './safety-items.component';

describe('SafetyItemsComponent', () => {
  let component: SafetyItemsComponent;
  let fixture: ComponentFixture<SafetyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
