import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererModuleComponent } from './gerer-module.component';

describe('GererModuleComponent', () => {
  let component: GererModuleComponent;
  let fixture: ComponentFixture<GererModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
