import { Injectable } from "@angular/core";
import { Observable, map, of } from 'rxjs';
import { ISeriesItem } from '@app/models';
import { Nullable, primitive, strHelp } from '@app/common';
import * as seriesRepo from './series.repo';

export type SeriesItemPredicate = (item: ISeriesItem) => boolean;

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  //consistent with services, we return an observable here
  // could just as easily returned an array.
  getAll() {
    const {data} = seriesRepo;
    if (primitive.isArray(data)) {
      return of(data.map((item: any) => item as ISeriesItem));
    }
    //else
    console.error("There is a problem with the series information repository - not an array as expected", {data});
    throw new Error('Unable to load the series data');
  }

  get(id: number): Observable<Nullable<ISeriesItem>>;
  get(predicate: SeriesItemPredicate): Observable<Nullable<ISeriesItem>>;
  get(param: number | SeriesItemPredicate): Observable<Nullable<ISeriesItem>> {
    const predicate = (typeof(param) === 'number') 
      ? (item: ISeriesItem) => item.id === param
      : param;
      
    return this.getAll()
      .pipe(
        map((items) => items.find(predicate))
      );
  }
}