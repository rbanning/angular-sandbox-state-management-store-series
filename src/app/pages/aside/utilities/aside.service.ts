import { of, Observable, switchMap, map } from 'rxjs';
import { Injectable } from "@angular/core";
import { categories, items } from './aside.repo';
import { IAsideCategory, IAsideItem } from './aside.interface';
import { Nullable } from '@app/common';

@Injectable()
export class AsideService {

//note: all results are as Observables to be consistent with 
//      services that pull data from remote apis


  categories$(): Observable<IAsideCategory[]> {
    return of(categories)
      .pipe(
        map((cats) => {
          return cats.map(category => {
            category.items = items.filter(item => item.categoryId === category.id);
            return category;
          });
        })
      )
  }

  items$(): Observable<IAsideItem[]> {
    return this.categories$()
      .pipe(
        switchMap((categories) => {
          return of(items);
        }),
        map((items) => {
          return items.map(item => {
            item.category = categories.find(c => c.id === item.categoryId);
            return item;
          })
        })
      );
  }

  findItem$(id: string): Observable<Nullable<IAsideItem>> {
    return this.items$()
      .pipe(
        map(items => {
          return items.find(item => item.id === id);
        })
      )
  }
}