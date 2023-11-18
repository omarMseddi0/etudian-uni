import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererNoteComponent } from './gerer-note.component';

describe('GererNoteComponent', () => {
  let component: GererNoteComponent;
  let fixture: ComponentFixture<GererNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
