import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstallationComponent } from './edit-installation.component';

describe('EditInstallationComponent', () => {
  let component: EditInstallationComponent;
  let fixture: ComponentFixture<EditInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstallationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
