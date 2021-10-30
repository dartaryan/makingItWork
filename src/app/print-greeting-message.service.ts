import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintGreetingMessageService {

  constructor() { }
  sayHello() {
    alert('Hello');
  }
  sayGoodbye() {
    alert('Goodbye');
  }
  sayWelcomeBack() {
    alert('Welcome back');
  }
}
