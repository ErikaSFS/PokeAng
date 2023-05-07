import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Lazy Loading


const routes: Routes = [
  { path: '', loadChildren:() => import('./pages/pages.module'). then(p => p.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
