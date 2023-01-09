import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeContratComponent } from './edit-type-contrat.component';

describe('EditTypeContratComponent', () => {
  let component: EditTypeContratComponent;
  let fixture: ComponentFixture<EditTypeContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
