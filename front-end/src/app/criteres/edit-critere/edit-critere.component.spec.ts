import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCritereComponent } from './edit-critere.component';

describe('EditCritereComponent', () => {
  let component: EditCritereComponent;
  let fixture: ComponentFixture<EditCritereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCritereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
