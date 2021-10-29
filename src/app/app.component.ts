import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
  expression: string = '';
  articles = [
    { title: 'today', description: 'friday', color:"orange",theNumber:1000000},
    { title: 'tomorrow', description: 'saturday', color:"lightgreen",theNumber:1300000 },
    { title: 'yesterday', description: 'thursday',  color:"lightblue",theNumber:1204000},
  ];
  constructor(private router: Router) {}


    options(){
      this.router.navigate(['exampleRoute','Boots',{age: 23,gender: 'Chipidi'}])
    }
  size() {
    this.myStyles['large-text'] = this.myStyles['large-text'] ? false : true;
    this.expression = 'largetext';
  }
  background() {
    this.myStyles['highlight'] = this.myStyles['highlight'] ? false : true;
    this.expression = 'highlight';
  }

  color() {
    this.myStyles['green-text'] = this.myStyles['green-text'] ? false : true;
    this.expression = 'greentext';
  }
}
