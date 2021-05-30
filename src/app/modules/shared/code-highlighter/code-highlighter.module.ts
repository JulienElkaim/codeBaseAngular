import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBaseComponent } from './code-base/code-base.component';
import {HighlightModule} from "ngx-highlightjs";



@NgModule({
  declarations: [
    CodeBaseComponent
  ],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports:[CodeBaseComponent]
})
export class CodeHighlighterModule { }
