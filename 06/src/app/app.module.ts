import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangeComponent,
    OnChangeParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
