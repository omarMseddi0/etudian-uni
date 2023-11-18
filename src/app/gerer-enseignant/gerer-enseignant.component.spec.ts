import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererEnseignantComponent } from './gerer-enseignant.component';

describe('GererEnseignantComponent', () => {
  let component: GererEnseignantComponent;
  let fixture: ComponentFixture<GererEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
