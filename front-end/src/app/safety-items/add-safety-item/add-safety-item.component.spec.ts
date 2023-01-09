import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSafetyItemComponent } from './add-safety-item.component';

describe('AddSafetyItemComponent', () => {
  let component: AddSafetyItemComponent;
  let fixture: ComponentFixture<AddSafetyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSafetyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSafetyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
