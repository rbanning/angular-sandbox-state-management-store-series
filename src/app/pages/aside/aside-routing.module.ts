import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside.component';

const routes: Routes = [
  {
    path: '',
    component: AsideComponent
  },
  {
    path: ':id',
    component: AsideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsideRoutingModule { }
