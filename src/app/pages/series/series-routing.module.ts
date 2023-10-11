import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesPageComponent } from './series-page.component';
import { SeriesPageDetailComponent } from './series-page-detail/series-page-detail.component';
import { ExamplesPageComponent } from './examples-page/examples-page.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesPageComponent
  },
  {
    path: ':id',
    component: SeriesPageDetailComponent
  },
  {
    path: ':id/examples',
    component: ExamplesPageComponent
  },
  {
    path: ':id/examples/:exampleId',
    component: ExamplesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
