import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeContratComponent } from './add-type-contrat.component';

describe('AddTypeContratComponent', () => {
  let component: AddTypeContratComponent;
  let fixture: ComponentFixture<AddTypeContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
