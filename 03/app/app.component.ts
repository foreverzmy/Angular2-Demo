import { Component } from '@angular/core';
import { Fruit } from './fruit.model'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>I like {{myLike}}</h2>
    <p>list</p>
    <ul>
      <li *ngFor='let fruit of fruits'>{{fruit.name}}</li>
    </ul>
    <p *ngIf="fruits.length > 3">你有很多个喜欢的水果!</p>
    `
})
export class AppComponent {
  title = 'Fruits';
  fruits = [
    new Fruit(1, 'Apple'),
    new Fruit(2, 'Orange'),
    new Fruit(3, 'Banana'),
    new Fruit(4, 'Pear'),
  ];
  myLike = this.fruits[0]
}