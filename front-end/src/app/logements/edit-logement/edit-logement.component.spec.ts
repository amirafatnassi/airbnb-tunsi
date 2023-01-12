import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogementComponent } from './edit-logement.component';

describe('EditLogementComponent', () => {
  let component: EditLogementComponent;
  let fixture: ComponentFixture<EditLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
