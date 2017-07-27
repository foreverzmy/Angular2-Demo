import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditShareModule } from './shared/edit-shared.module';
import { EditComponent } from './edit.component';

@NgModule({
  imports: [CommonModule, EditShareModule],
  declarations: [EditComponent],
  exports: [EditComponent, EditShareModule]
})
export class EditModule { }

