import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeLogementComponent } from './add-type-logement.component';

describe('AddTypeLogementComponent', () => {
  let component: AddTypeLogementComponent;
  let fixture: ComponentFixture<AddTypeLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
