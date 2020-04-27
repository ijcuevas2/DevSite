import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvgZoomComponent } from './svg-zoom/svg-zoom.component';


const routes: Routes = [
  { path: '**', component: SvgZoomComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
