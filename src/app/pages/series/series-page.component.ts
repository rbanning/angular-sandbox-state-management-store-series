import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ISeriesItem } from '@app/models';
import { SeriesService } from '@app/core';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styles: [
  ]
})
export class SeriesPageComponent {

  items$!: Observable<ISeriesItem[]>;

  constructor(protected service: SeriesService) {
    this.items$ = service.getAll();
  }

}
