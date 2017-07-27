import { Component } from '@angular/core';
import { } from './amount/amount.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public number1: number = 0;
  public number2: number = 1;
  constructor() {
  }

}
