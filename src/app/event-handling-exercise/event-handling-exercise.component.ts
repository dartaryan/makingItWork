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

  onKey(event: { key: any; }){
    this.keys.push(event.key)
    alert(this.keys)
    alert(keys.length)
    if (keys.length === 5){
      alert(keys[-1])
    }
  }
}
