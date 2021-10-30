import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrintGreetingMessageService } from '../print-greeting-message.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent implements OnInit {
  @Input() name: string | undefined;
  @Output() sendMessage = new EventEmitter<string>();
  constructor(public PrintGreetingMessageService: PrintGreetingMessageService) {
    PrintGreetingMessageService.sayWelcomeBack();
  }

  ngOnInit(): void {}

  send() {
    this.sendMessage.emit(`Welcome ${this.name}!`);
  }
}
