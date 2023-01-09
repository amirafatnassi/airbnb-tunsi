import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesLogementComponent } from './types-logement.component';

describe('TypesLogementComponent', () => {
  let component: TypesLogementComponent;
  let fixture: ComponentFixture<TypesLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
