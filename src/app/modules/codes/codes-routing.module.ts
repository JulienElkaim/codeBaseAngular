import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodesComponent } from './codes.component';
import {DragNDropPageComponent} from "./components/drag-n-drop/drag-n-drop-page.component";

const routes: Routes = [{ path: '', component: DragNDropPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodesRoutingModule { }
