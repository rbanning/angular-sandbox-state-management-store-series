import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, of, switchMap } from 'rxjs';

import { SeriesService } from '@app/core';
import { Nullable, parsers, primitive, strHelp } from '@app/common';
import { ISeriesItem, ISeriesPage } from '@app/models';

type PageStateStatus = 'pending' | 'loading' | 'ready' | 'error';
type PagePayload = {
  seriesId: Nullable<number>,
  series: Nullable<ISeriesItem>,
  exampleId: Nullable<string>,
  example: Nullable<ISeriesPage>,
}
type PageState = {
  status: PageStateStatus,
  payload?: PagePayload,
  error?: { title: string, message: string }
}

@Component({
  selector: 'app-examples-page',
  templateUrl: './examples-page.component.html',
  styles: [
  ]
})
export class ExamplesPageComponent implements OnDestroy {

  private seriesId: Nullable<number>;
  private exampleId: Nullable<string>;

  stateSubject = new BehaviorSubject<PageState>({status: 'pending'});
  state$: Observable<PageState> = this.stateSubject.asObservable();

  private subscriptions: Subscription[] = [];

  constructor(
    protected service: SeriesService,
    route: ActivatedRoute
    ) {
    this.subscriptions.push(
      route.params
        .pipe(
          switchMap((params) => {
            this.stateSubject.next({status: 'loading'});
            this.seriesId = parsers.toInt(params['id'], 0);
            this.exampleId = params['exampleId'];
            return primitive.isInteger(this.seriesId) ? service.get(this.seriesId) : of(null);
          })
        )
      .subscribe({
        next: (series: Nullable<ISeriesItem>) => {
          if (series) {
            const payload: PagePayload = {
              seriesId: this.seriesId,
              series,
              exampleId: this.exampleId,
              example: series.pages.find(p => strHelp.stringEquals(p.id, this.exampleId, true))
            };
            if (payload.example) {
              this.stateSubject.next({
                status: 'ready',
                payload
              });
            } else {
              console.log("DEBUG: could not find the example", {self: this, series});

              this.stateSubject.next({status: 'error', 
                error: {
                  title: 'Missing/Invalid Example', 
                  message: 'Could not find the series example that you requested'
                }
              });
            }
          } else {
            this.stateSubject.next({status: 'error', 
              error: {
                title: 'Missing/Invalid Series', 
                message: 'Could not find the series that you requested'
              }
            });
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
      if (this.subscriptions) {
        this.subscriptions.forEach(sub => sub.unsubscribe());
      }
  }
  
}
