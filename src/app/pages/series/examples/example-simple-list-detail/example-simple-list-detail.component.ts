import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ProductService } from '@app/core';
import { IProducts } from '@app/models';

import { ExamplePageBase } from '../example-page-base';

@Component({
  selector: 'app-example-simple-list-detail',
  templateUrl: './example-simple-list-detail.component.html',
  styles: [
  ]
})
export class ExampleSimpleListDetailComponent extends ExamplePageBase {
  products$: Observable<IProducts[]>;

  constructor(service: ProductService) {
    super();

    this.products$ = service.loadFromRemote();
  }
}
