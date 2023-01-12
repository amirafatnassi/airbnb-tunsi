import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogementComponent } from './add-logement.component';

describe('AddLogementComponent', () => {
  let component: AddLogementComponent;
  let fixture: ComponentFixture<AddLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
