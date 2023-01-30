import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLogementComponent } from './show-logement.component';

describe('ShowLogementComponent', () => {
  let component: ShowLogementComponent;
  let fixture: ComponentFixture<ShowLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
