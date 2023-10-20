import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Nullable, parsers } from '@app/common';
import { SeriesService, ISeriesItem } from '../utilities';

@Component({
  selector: 'app-series-page-detail',
  templateUrl: './series-page-detail.component.html',
  styles: [
  ]
})
export class SeriesPageDetailComponent {
  itemId: Nullable<number>;
  item: Nullable<ISeriesItem>;

  private subscriptions: Subscription[] = [];

  constructor(
    protected service: SeriesService,
    route: ActivatedRoute
    ) {
    this.subscriptions.push(
      route.params.subscribe({
        next: (params) => {

          this.loadItem(parsers.toInt(params['id'], 0));
        }
      })
    )
  }

  private loadItem(id: Nullable<number>) {
    this.itemId = id;
    if (id) {
      this.subscriptions.push(
        this.service.get(id)
        .subscribe({
          next: (item) => {
            this.item = item;
          }
        })
      )
    } else {
      this.item = null;
    }
  }

  
}
