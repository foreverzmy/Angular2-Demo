import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ng2-bootstrap/carousel';

@NgModule({
  declarations: [  // 指明了 HomeModule 模块实现的组件/指令/管道等
    HomeComponent
  ],
  imports: [  // 标记依赖的其他模块
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [  // 定义了模块要暴露出去的部分
    HomeComponent
  ]
})
export class HomeModule { }
