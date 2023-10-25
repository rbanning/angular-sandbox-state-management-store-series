import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { ProductService } from '@app/core';
import { IProduct } from '@app/models';

import { ExamplePageBase } from '../example-page-base';
import { Nullable, primitive } from '@app/common';

@Component({
  selector: 'app-example-simple-list-detail',
  templateUrl: './example-simple-list-detail.component.html',
  styles: [
  ]
})
export class ExampleSimpleListDetailComponent extends ExamplePageBase {
  products$: Observable<IProduct[]>;
  
  selectedId: Nullable<string> = null;
  selected$: Observable<Nullable<IProduct>> = of(null);
  


  constructor(private service: ProductService) {
    super();

    this.products$ = service.loadFromRemote();
  }

  select(id: string) {
    this.selectedId = id;
    this.selected$ = this.service.getFromRemote(id);
  }

  deselect() {
    this.products$ = this.service.loadFromRemote();
  }
}
