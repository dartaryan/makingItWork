import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCodeible';
  ClickHere(){
    alert('Angular!')
  }
  keyupexample(event: { key: any; }) {
    let key = event.key;
    alert(key)
  }
}
