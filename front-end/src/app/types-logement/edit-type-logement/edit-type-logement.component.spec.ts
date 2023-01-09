import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeLogementComponent } from './edit-type-logement.component';

describe('EditTypeLogementComponent', () => {
  let component: EditTypeLogementComponent;
  let fixture: ComponentFixture<EditTypeLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
