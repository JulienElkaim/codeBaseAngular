import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { CodeHighlighterModule } from './code-highlighter/code-highlighter.module';
import {CodeBaseComponent} from "./code-highlighter/code-base/code-base.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    CodeHighlighterModule
  ],
  exports:[CommonModule, RouterModule, CodeBaseComponent]
})
export class SharedModule { }
