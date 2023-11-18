import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEnseignantComponent } from './interface-enseignant.component';

describe('InterfaceEnseignantComponent', () => {
  let component: InterfaceEnseignantComponent;
  let fixture: ComponentFixture<InterfaceEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
