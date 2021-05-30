import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodesComponent } from './codes.component';
import {DragNDropComponent} from "./components/drag-n-drop/drag-n-drop.component";

const routes: Routes = [{ path: '', component: DragNDropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodesRoutingModule { }
