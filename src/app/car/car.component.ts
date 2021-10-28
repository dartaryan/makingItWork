import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  @Input() price: number | undefined;
  @Input() brand: string | undefined;
  @Output() sendPurchaseInfo = new EventEmitter<{
    price: number | undefined;
    brand: string | undefined;
  }>();

  constructor() {}

  ngOnInit(): void {}

  purchase() {
    this.sendPurchaseInfo.emit({
      price: this.price,
      brand: this.brand,
    });
  }
}
