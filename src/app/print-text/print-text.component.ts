import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-text',
  templateUrl: './print-text.component.html',
  styleUrls: ['./print-text.component.css'],
})
export class PrintTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  print(inputElement: HTMLInputElement) {
    let message = inputElement.value;
    alert(message);
  }
}
