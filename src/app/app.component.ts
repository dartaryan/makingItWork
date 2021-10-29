import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  largeText = 'large-text';
  highlightText = 'highlight';
  greenText = 'green-text';

  myStyles = { 'large-text': false, highlight: false, 'green-text': false };
  constructor() {}

  size() {
    this.myStyles['large-text'] = this.myStyles['large-text'] ? false : true;
  }
  background() {
    this.myStyles['highlight'] = this.myStyles['highlight'] ? false : true;
  }

  color() {
    this.myStyles['green-text'] = this.myStyles['green-text'] ? false : true;
  }
}
