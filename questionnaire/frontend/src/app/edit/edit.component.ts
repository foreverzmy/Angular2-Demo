import { Component, OnInit } from '@angular/core';

import { QuestionType } from '../shared/model/question.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor() { }

  onAddQuestion(type: QuestionType) {
  
  }

}
