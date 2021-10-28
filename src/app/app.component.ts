import { Component } from '@angular/core';
import { CarComponent } from './car/car.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myMessage = 'C++';

  angularClick() {
    this.myMessage = 'Angular';
  }
  pythonClick() {
    this.myMessage = 'Python!';
  }
  javascriptClick() {
    this.myMessage = 'Javascript!!';
  }

  onReciveMessage(event: string){
    let message = event
    this.myMessage = message
  }

  onInfoReceived(event: { price: any; brand: any; }){
    let price = event.price
    let brand = event.brand
    alert(`Price: ${price}, Brand: ${brand}`)
  }
}
