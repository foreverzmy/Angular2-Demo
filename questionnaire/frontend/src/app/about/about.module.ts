import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AccordionModule } from 'ng2-bootstrap/accordion';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [  // 标记依赖的其他模块
    CommonModule,
    AccordionModule.forRoot()
  ],
  exports: [  // 定义了模块要暴露出去的部分
    AboutComponent
  ]
})
export class AboutModule { }
