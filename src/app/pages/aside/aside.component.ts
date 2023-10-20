import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AsideService } from './utilities/aside.service';
import { IAsideCategory, IAsideItem } from './utilities';
import { Nullable } from '@app/common';
import { DynamicHostDirective, ErrorMessageComponent, IErrorMessage } from '@app/shared';
import { IAsideComponent } from './aside-components';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnInit, OnDestroy {
  categories$: Observable<IAsideCategory[]>;
  item: Nullable<IAsideItem>;
  itemId: Nullable<string>;


  @ViewChild(DynamicHostDirective, {static: true}) dynamicHost!: DynamicHostDirective;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected service: AsideService,
    route: ActivatedRoute) 
  {
    this.categories$ = service.categories$();
    
    this.subscriptions.push(
      route.params.subscribe({
        next: (params) => {
          this.loadItem(params['id']);
        }
      })
    );
  }

  ngOnInit(): void {
    this.loadItemComponent();
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
  }

  private loadItem(id: Nullable<string>) {
    this.itemId = id;
    if (id) {
      this.subscriptions.push(
        this.service.findItem$(id)
          .subscribe({
            next:(item) => {
              this.item = item;
            }
          })
      )
    } else {
      this.item = null;
    }
  }

  private loadItemComponent() {
    const ref = this.dynamicHost.viewContainerRef;    
    if (!ref) {
      throw new Error("Could not locate the dynamicHost's view container ref");
    }

    //else
    ref.clear();

    if (this.item) {
      if (this.item.component) {
        const componentRef = ref.createComponent<IAsideComponent>(this.item.component);
        componentRef.instance.category = this.item.category as IAsideCategory;
        componentRef.instance.data = this.item;  
      } else {
        //error 
        const componentRef = ref.createComponent<IErrorMessage>(ErrorMessageComponent);
        componentRef.instance.title = 'Error Loading Page';
        componentRef.instance.message = 'Could not locate the content for this page.';  
      }
    }

  }
}
