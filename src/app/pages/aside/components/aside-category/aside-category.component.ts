import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';
import { IAsideCategory, IAsideItem } from '../../utilities';

@Component({
  selector: 'app-aside-category',
  templateUrl: './aside-category.component.html',
  styles: [
  ]
})
export class AsideCategoryComponent {
  @Input()
  category: Nullable<IAsideCategory>;
}
