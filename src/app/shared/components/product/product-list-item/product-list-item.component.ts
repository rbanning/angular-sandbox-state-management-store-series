import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';
import { IProduct } from '@app/models';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styles: [
  ]
})
export class ProductListItemComponent {
  @Input()
  item: Nullable<IProduct>;
}
