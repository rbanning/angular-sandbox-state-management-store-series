import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription, of } from 'rxjs';

import { Nullable, parsers } from '@app/common';
import { SeriesService } from '@app/core';
import { ISeriesItem } from '@app/models';

@Component({
  selector: 'app-series-page-detail',
  templateUrl: './series-page-detail.component.html',
  styles: [
  ]
})
export class SeriesPageDetailComponent {
  item$!: Observable<Nullable<ISeriesItem>>;

  private subscriptions: Subscription[] = [];

  constructor(
    protected service: SeriesService,
    route: ActivatedRoute
    ) {
    this.subscriptions.push(
      route.params.subscribe({
        next: (params) => {
          const id = parsers.toInt(params['id'], 0);
          if (id) {
            this.item$ = service.get(id);
          } else {
            this.item$ = of(null);
          }
        }
      })
    )
  }
}
