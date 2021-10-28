import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling-exercise',
  templateUrl: './event-handling-exercise.component.html',
  styleUrls: ['./event-handling-exercise.component.css'],
})
export class EventHandlingExerciseComponent implements OnInit {
  keys: string[] | undefined;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    alert('Clicked');
  }
  tracker = 0;
  onKey(event: { key: any }) {
    let key = event.key;
    this.tracker++;
    if(this.tracker>=5){
      alert(key)
    }
  }
}
