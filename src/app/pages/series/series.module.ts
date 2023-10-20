import { NgModule } from '@angular/core';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesPageComponent } from './series-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { SeriesPageDetailComponent } from './series-page-detail/series-page-detail.component';
import { ExamplesPageComponent } from './examples-page/examples-page.component';
import { sharedSeriesComponents } from './components';
import { exampleComponents } from './examples';


@NgModule({
  declarations: [
    SeriesPageComponent,
    SeriesPageDetailComponent,
    ExamplesPageComponent,
    sharedSeriesComponents,
    exampleComponents,
  ],
  imports: [
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
