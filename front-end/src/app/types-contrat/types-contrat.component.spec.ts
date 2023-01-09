import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesContratComponent } from './types-contrat.component';

describe('TypesContratComponent', () => {
  let component: TypesContratComponent;
  let fixture: ComponentFixture<TypesContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
