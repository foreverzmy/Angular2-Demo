import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSelectComponent } from './question-select/question-select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuestionSelectComponent],
  exports: [QuestionSelectComponent]
})
export class EditShareModule { }
