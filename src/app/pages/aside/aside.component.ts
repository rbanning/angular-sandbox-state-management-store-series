import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, of } from 'rxjs';
import { AsideService } from './utilities/aside.service';
import { IAsideCategory, IAsideItem } from './utilities';
import { Nullable } from '@app/common';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnDestroy {
  categories$: Observable<IAsideCategory[]>;
  item$: Observable<Nullable<IAsideItem>>;
  itemId: Nullable<string>;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected service: AsideService,
    route: ActivatedRoute) 
  {
    this.categories$ = service.categories$();
    this.item$ = of(null);
    
    this.subscriptions.push(
      route.params.subscribe({
        next: (params) => {
          this.itemId = params['id'];
          this.item$ = service.findItem$(this.itemId ?? '');
        }
      })
    );
    
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}

}
