import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { TutorialsComponent } from './tutorials.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TutorialsComponent
  ],
  imports: [
    SharedModule,
    TutorialsRoutingModule
  ]
})
export class TutorialsModule { }
