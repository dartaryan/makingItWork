import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlingExerciseComponent } from './event-handling-exercise.component';

describe('EventHandlingExerciseComponent', () => {
  let component: EventHandlingExerciseComponent;
  let fixture: ComponentFixture<EventHandlingExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHandlingExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHandlingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
