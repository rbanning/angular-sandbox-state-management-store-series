import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { SeriesService, ISeriesItem } from './utilities';

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
