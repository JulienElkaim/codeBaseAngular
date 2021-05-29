import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodesRoutingModule } from './codes-routing.module';
import { CodesComponent } from './codes.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CodesComponent
  ],
  imports: [
    SharedModule,
    CodesRoutingModule
  ]
})
export class CodesModule { }
