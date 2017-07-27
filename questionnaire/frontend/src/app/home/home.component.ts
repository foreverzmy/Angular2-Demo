import { Component, OnInit } from '@angular/core';

interface Slides {
  img: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public slides: Array<Slides> = [];
  public slogan: Array<any> = [
    '免费简约的问卷系统',
    '简单 好用 在线调查网站',
    '多方式创建编辑文件'
  ];


  constructor() {
    for (let i = 0; i < 3; i++) {
      this.addSlide(i);
    }
  }

  addSlide(idx: number) {
    this.slides.push({
      img: `../assets/img/home/banner_0${idx + 1}.jpg`,
      text: this.slogan[idx]
    });
  }

}
