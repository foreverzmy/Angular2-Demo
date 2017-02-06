import { Component } from '@angular/core';
@Component({
  selector: 'click-me',
  template: `
    <button (click)='onClickMe()'>Clike Me!</button>
    {{clickMessage}}
  `
})
export class ClickMeComponent { 
  clickMessage = '';
 
  onClickMe() {
    this.clickMessage = 'Hello World!';
  }
}