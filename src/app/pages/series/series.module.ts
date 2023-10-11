import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesPageComponent } from './series-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { SeriesPageDetailComponent } from './series-page-detail/series-page-detail.component';
import { ExamplesPageComponent } from './examples-page/examples-page.component';


@NgModule({
  declarations: [
    SeriesPageComponent,
    SeriesPageDetailComponent,
    ExamplesPageComponent
  ],
  imports: [
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
