import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSafetyItemComponent } from './edit-safety-item.component';

describe('EditSafetyItemComponent', () => {
  let component: EditSafetyItemComponent;
  let fixture: ComponentFixture<EditSafetyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSafetyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSafetyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
