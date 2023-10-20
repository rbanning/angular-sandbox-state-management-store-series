import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, of, switchMap } from 'rxjs';

import { Nullable, parsers, primitive, strHelp } from '@app/common';
import { DynamicHostDirective, ErrorMessageComponent, IErrorMessage } from '@app/shared';

import { SeriesService, ISeriesItem, ISeriesPage } from '../utilities';

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

  @ViewChild(DynamicHostDirective, {static: true}) dynamicHost!: DynamicHostDirective;

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
          this.loadSeries(series);
        }
      })
    )
  }

  ngOnDestroy(): void {
      if (this.subscriptions) {
        this.subscriptions.forEach(sub => sub.unsubscribe());
      }
  }

  private loadSeries(series: Nullable<ISeriesItem>) {
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
        this.loadExampleComponent(payload.example.component);
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
  
  private loadExampleComponent(component: any) {
    console.log("DEBUG: loading component", component);
  }
}
