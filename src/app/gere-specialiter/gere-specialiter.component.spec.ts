import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereSpecialiterComponent } from './gere-specialiter.component';

describe('GereSpecialiterComponent', () => {
  let component: GereSpecialiterComponent;
  let fixture: ComponentFixture<GereSpecialiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereSpecialiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GereSpecialiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
