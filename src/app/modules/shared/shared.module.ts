import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { CodeHighlighterModule } from './code-highlighter/code-highlighter.module';
import {CodeBaseComponent} from "./code-highlighter/code-base/code-base.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CodeHighlighterModule
  ],
  exports:[CommonModule, RouterModule, FormsModule, CodeBaseComponent]
})
export class SharedModule { }
