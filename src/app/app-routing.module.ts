import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'codes', loadChildren: () => import('./modules/codes/codes.module').then(m => m.CodesModule) },
  { path: 'tutorials', loadChildren: () => import('./modules/tutorials/tutorials.module').then(m => m.TutorialsModule) },
  {
    path: '',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
