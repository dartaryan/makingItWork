import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-example',
  templateUrl: './routing-example.component.html',
  styleUrls: ['./routing-example.component.css'],
})
export class RoutingExampleComponent implements OnInit {
  name: string =""
  age: number = 0;
  gender: string = ""
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((paramsObject) => {
      this.name = paramsObject.name;
      this.age = paramsObject.age;
      this.gender = paramsObject.gender;
    });
  }

  ngOnInit(): void {}
}
