import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  public theme: string;
  constructor() { }

  ngOnInit() {
  }
  changeTheme(color) {
    this.theme = color;
  }

}
